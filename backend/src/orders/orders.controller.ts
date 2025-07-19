import {
    Controller,
    Get,
    Param,
    Post,
    Patch,
    Delete,
    Body,
    NotFoundException,
} from '@nestjs/common'
import { OrdersService } from './orders.service'
import { UpdateOrderDto } from './dto/update-order.dto'
import { CreateOrderDto } from './dto/create-order.dto'

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @Post()
    async createOrder(@Body() dto: CreateOrderDto) {
        return this.ordersService.createOrder(dto)
    }

    @Get(':id')
    async getOrder(@Param('id') id: string) {
        const order = await this.ordersService.findById(id)
        if (!order) throw new NotFoundException('Order not found')
        return order
    }

    @Patch(':id')
    async updateOrder(@Param('id') id: string, @Body() dto: UpdateOrderDto) {
        const updated = await this.ordersService.updateOrder(id, dto)
        if (!updated) throw new NotFoundException('Order not found')
        return updated
    }

    @Delete(':id')
    async deleteOrder(@Param('id') id: string) {
        const deleted = await this.ordersService.deleteOrder(id)
        if (!deleted) throw new NotFoundException('Order not found')
        return { message: 'Order deleted successfully' }
    }
}
