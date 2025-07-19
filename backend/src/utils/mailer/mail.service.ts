import { Injectable } from '@nestjs/common'
import { MailerService } from '@nestjs-modules/mailer'

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) {}

    async sendWelcomeEmail(email: string, name: string) {
        await this.mailerService.sendMail({
            to: email,
            subject: 'Welcome to Our App!',
            template: 'welcome',
            context: {
                name,
            },
        })
    }

    async sendPasswordResetEmail(email: string, name: string, resetToken: string) {
        const CLIENT_URL =
            process.env.PRODUCTION === 'true'
                ? process.env.CLIENT_URL_PRODUCTION
                : process.env.CLIENT_URL_DEVELOPMENT

        const resetLink = `${CLIENT_URL}/reset-password?token=${resetToken}`

        await this.mailerService.sendMail({
            to: email,
            subject: 'Reset Your Password',
            template: 'reset-password',
            context: {
                name,
                resetLink,
            },
        })
    }

    async sendVerificationEmail(email: string, name: string, token: string) {
        const CLIENT_URL =
            process.env.PRODUCTION === 'true'
                ? process.env.CLIENT_URL_PRODUCTION
                : process.env.CLIENT_URL_DEVELOPMENT

        const verificationLink = `${CLIENT_URL}/verify-email?token=${token}`

        await this.mailerService.sendMail({
            to: email,
            subject: 'Verify Your Email',
            template: 'verification-link',
            context: {
                name,
                verificationLink,
            },
        })
    }
}
