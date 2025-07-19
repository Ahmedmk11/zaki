import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

@Schema({ timestamps: true })
export class Product {
    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    description: string

    @Prop({ required: false })
    volume: number

    @Prop({ required: true })
    price: number

    @Prop({ required: true })
    quantity: number

    @Prop({ required: true })
    image: string

    @Prop({ required: true, unique: true })
    sku: string
}

export type ProductDocument = Product & Document
export const ProductSchema = SchemaFactory.createForClass(Product)
