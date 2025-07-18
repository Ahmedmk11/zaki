import { Controller, Get, Param, Patch, Delete, Body, NotFoundException } from '@nestjs/common'
import { ProductsService } from './products.service'
import { UpdateProductDto } from './dto/update-product.dto'

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get(':id')
    async getProduct(@Param('id') id: string) {
        const product = await this.productsService.findById(id)
        if (!product) throw new NotFoundException('Product not found')
        return product
    }

    @Patch(':id')
    async updateProduct(@Param('id') id: string, @Body() dto: UpdateProductDto) {
        const updated = await this.productsService.updateProduct(id, dto)
        if (!updated) throw new NotFoundException('Product not found')
        return updated
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: string) {
        const deleted = await this.productsService.deleteProduct(id)
        if (!deleted) throw new NotFoundException('Product not found')
        return { message: 'Product deleted successfully' }
    }
}
