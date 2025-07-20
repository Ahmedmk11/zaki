import { IsString, IsEmail, IsNotEmpty, IsPhoneNumber, IsBoolean } from 'class-validator'

export class CreateAdminDto {
    @IsString()
    @IsNotEmpty()
    firstName: string

    @IsString()
    @IsNotEmpty()
    lastName: string

    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsPhoneNumber()
    phone: string

    @IsBoolean()
    isAdmin: boolean
}
