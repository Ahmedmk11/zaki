import { IsArray, IsEnum, IsMongoId, IsNumber } from 'class-validator'

export class CreateOrderDto {
    @IsMongoId()
    customerId: string

    @IsNumber()
    quantity: number

    @IsNumber()
    total_price: number

    @IsEnum(['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'])
    status: string

    @IsArray()
    @IsMongoId({ each: true })
    products: string[]
}
