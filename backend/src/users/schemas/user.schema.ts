import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

@Schema({ timestamps: true })
export class User {
    @Prop()
    firstName?: string

    @Prop()
    lastName?: string

    @Prop({ required: true, unique: true })
    email: string

    @Prop({ required: true })
    password: string

    @Prop()
    phone?: string

    @Prop({
        type: {
            street: String,
            city: String,
            area: String,
            zip: String,
            country: String,
        },
    })
    address?: {
        street?: string
        city?: string
        area?: string
        zip?: string
        country?: string
    }

    @Prop({ default: false })
    isEmailVerified: boolean

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Product' }] })
    cart: Types.ObjectId[]

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Order' }] })
    orders: Types.ObjectId[]
}

export type UserDocument = User & Document
export const UserSchema = SchemaFactory.createForClass(User)
