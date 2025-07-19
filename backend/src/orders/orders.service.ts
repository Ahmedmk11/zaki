import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Order, OrderDocument } from './schemas/order.schema'
import { UpdateOrderDto } from './dto/update-order.dto'
import { CreateOrderDto } from './dto/create-order.dto'

@Injectable()
export class OrdersService {
    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

    async createOrder(dto: CreateOrderDto): Promise<Order> {
        const createdOrder = new this.orderModel(dto)
        return createdOrder.save()
    }

    async findById(id: string): Promise<Order | null> {
        return this.orderModel.findById(id).exec()
    }

    async updateOrder(id: string, dto: UpdateOrderDto): Promise<Order | null> {
        return this.orderModel.findByIdAndUpdate(id, dto, {
            new: true,
            runValidators: true,
        })
    }

    async deleteOrder(id: string): Promise<boolean> {
        const result = await this.orderModel.deleteOne({ _id: id }).exec()
        return result.deletedCount > 0
    }
}
