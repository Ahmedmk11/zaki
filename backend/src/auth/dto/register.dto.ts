import { IsEmail, IsOptional, IsString, MinLength, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

class AddressDto {
    @IsString()
    street: string

    @IsString()
    city: string

    @IsString()
    area: string

    @IsOptional()
    @IsString()
    zip?: string

    @IsString()
    country: string
}

export class RegisterDto {
    @IsEmail()
    email: string

    @IsString()
    @MinLength(8)
    password: string

    @IsString()
    firstName: string

    @IsString()
    lastName: string

    @IsString()
    phone: string

    verificationCode: string | null
    verificationCodeExpiresAt: Date | null

    @ValidateNested()
    @Type(() => AddressDto)
    address: AddressDto
}
