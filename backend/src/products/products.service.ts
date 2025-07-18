import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Product, ProductDocument } from './schemas/product.schema'
import { UpdateProductDto } from './dto/update-product.dto'

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

    async findById(id: string): Promise<Product | null> {
        return this.productModel.findById(id).exec()
    }

    async updateProduct(id: string, dto: UpdateProductDto): Promise<Product | null> {
        return this.productModel.findByIdAndUpdate(id, dto, {
            new: true,
            runValidators: true,
        })
    }

    async deleteProduct(id: string): Promise<boolean> {
        const result = await this.productModel.deleteOne({ _id: id }).exec()
        return result.deletedCount > 0
    }
}
