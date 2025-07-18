import { IsOptional, IsString } from 'class-validator'

export class UpdateProductDto {
    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    volume?: number

    @IsOptional()
    price?: number

    @IsOptional()
    quantity?: number

    @IsOptional()
    @IsString()
    image?: string

    @IsOptional()
    @IsString()
    sku?: string
}
