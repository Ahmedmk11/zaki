import { Injectable, UnauthorizedException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'
import { User, UserDocument } from '../users/schemas/user.schema'
import bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { Response } from 'express'

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private readonly jwtService: JwtService
    ) {}
    async register(dto: RegisterDto): Promise<User> {
        const existingUserEmail = await this.userModel.findOne({ email: dto.email }).exec()
        if (existingUserEmail) {
            throw new Error('User with this email already exists')
        }
        const existingUserPhone = await this.userModel.findOne({ phone: dto.phone }).exec()
        if (existingUserPhone) {
            throw new Error('User with this phone number already exists')
        }

        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(dto.password, salt)
        dto.password = hashedPassword

        const user = new this.userModel(dto)
        await user.save()
        return user
    }

    async login(dto: LoginDto, res: Response): Promise<{ message: string }> {
        const user = await this.userModel.findOne({ email: dto.email }).exec()
        if (!user) throw new UnauthorizedException('Invalid credentials')

        const isMatch = await bcrypt.compare(dto.password, user.password)
        if (!isMatch) throw new UnauthorizedException('Invalid credentials')

        const token = this.jwtService.sign({ sub: user._id })

        if (process.env.PRODUCTION === 'true') {
            res.cookie('tkn', token, {
                httpOnly: true,
                secure: true,
                sameSite: 'none',
                maxAge: 24 * 60 * 60 * 1000,
            })
        } else {
            res.cookie('tkn', token, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
            })
        }

        return { message: 'Successfully Logged in' }
    }
}
