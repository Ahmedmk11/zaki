import { IsEmail, IsOptional, IsString, MinLength, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

class UpdateAddressDto {
    @IsOptional()
    @IsString()
    street?: string

    @IsOptional()
    @IsString()
    city?: string

    @IsOptional()
    @IsString()
    area?: string

    @IsOptional()
    @IsString()
    zip?: string

    @IsOptional()
    @IsString()
    country?: string
}

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    @MinLength(8)
    password?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => UpdateAddressDto)
    address?: UpdateAddressDto
}
