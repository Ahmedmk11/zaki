import { Controller, Body, Post, Res, Query } from '@nestjs/common'
import { AuthService } from './auth.service'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'
import { Response } from 'express'
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    async register(@Body() dto: RegisterDto) {
        return this.authService.register(dto)
    }

    @Post('login')
    async login(@Body() dto: LoginDto, @Res({ passthrough: true }) res: Response) {
        return this.authService.login(dto, res)
    }

    @Post('verify-email')
    async verifyEmail(@Query('token') token: string) {
        return this.authService.verifyEmail(token)
    }

    @Post('resend-verification')
    async resendVerification(@Body('email') email: string) {
        return this.authService.resendVerification(email)
    }
}
