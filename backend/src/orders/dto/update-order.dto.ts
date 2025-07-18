import { IsOptional, IsNumber, IsEnum, IsArray, IsMongoId } from 'class-validator'
import { Types } from 'mongoose'

export class UpdateOrderDto {
    @IsOptional()
    @IsNumber()
    quantity?: number

    @IsOptional()
    total_price?: number

    @IsOptional()
    @IsEnum(['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'])
    status?: string

    @IsOptional()
    @IsArray()
    @IsMongoId({ each: true })
    products?: Types.ObjectId[]
}
