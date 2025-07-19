import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

@Schema({ timestamps: true })
export class User {
    @Prop({ required: true })
    firstName: string

    @Prop({ required: true })
    lastName: string

    @Prop({ required: true, unique: true })
    email: string

    @Prop({ required: true })
    password: string

    @Prop({ required: true, unique: true })
    phone: string

    @Prop({
        type: {
            street: String,
            city: String,
            area: String,
            zip: String,
            country: String,
        },
        required: false,
    })
    address?: {
        street: string
        city: string
        area: string
        zip: string
        country: string
    }

    @Prop({ required: true, default: false })
    isEmailVerified: boolean

    verificationCode: string | null

    verificationCodeExpiresAt: Date | null

    @Prop({ required: true, default: false })
    vip: boolean

    @Prop({ required: true, default: false })
    isAdmin: boolean

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Product' }] })
    cart?: Types.ObjectId[]

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Order' }] })
    orders?: Types.ObjectId[]
}

export type UserDocument = User & Document
export const UserSchema = SchemaFactory.createForClass(User)
