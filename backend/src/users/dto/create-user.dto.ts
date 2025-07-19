import { IsString, IsEmail, IsOptional, IsBoolean, IsArray } from 'class-validator'
import { Types } from 'mongoose'

export class CreateUserDto {
    @IsString()
    firstName: string

    @IsString()
    lastName: string

    @IsEmail()
    email: string

    @IsString()
    password: string

    @IsString()
    phone: string

    @IsOptional()
    address?: {
        street: string
        city: string
        area: string
        zip: string
        country: string
    }

    @IsBoolean()
    isEmailVerified: boolean

    @IsBoolean()
    vip: boolean

    @IsBoolean()
    isAdmin: boolean

    @IsOptional()
    @IsArray()
    cart?: Types.ObjectId[]

    @IsOptional()
    @IsArray()
    orders?: Types.ObjectId[]
}
