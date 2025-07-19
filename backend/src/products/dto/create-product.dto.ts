import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator'

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsNumber()
    @IsNotEmpty()
    volume: number

    @IsNumber()
    @IsNotEmpty()
    price: number

    @IsNumber()
    @IsNotEmpty()
    quantity: number

    @IsString()
    @IsNotEmpty()
    image: string

    @IsString()
    @IsNotEmpty()
    sku: string
}
