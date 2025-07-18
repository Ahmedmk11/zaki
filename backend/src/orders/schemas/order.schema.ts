import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

@Schema({ timestamps: true })
export class Order {
    @Prop({ required: true })
    customerId: Types.ObjectId

    @Prop({ required: true })
    quantity: number

    @Prop({ required: true })
    total_price: number

    @Prop({
        required: true,
        default: 'Pending',
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
    })
    status: string

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Product' }] })
    products: Types.ObjectId[]
}

export type OrderDocument = Order & Document
export const OrderSchema = SchemaFactory.createForClass(Order)
