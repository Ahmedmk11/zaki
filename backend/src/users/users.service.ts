import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User, UserDocument } from './schemas/user.schema'
import { UpdateUserDto } from './dto/update-user.dto'
import bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async findById(id: string): Promise<User | null> {
        return this.userModel.findById(id).exec()
    }

    async updateUser(id: string, dto: UpdateUserDto): Promise<User | null> {
        if (dto.password) {
            const salt = await bcrypt.genSalt()
            dto.password = await bcrypt.hash(dto.password, salt)
        }

        return this.userModel.findByIdAndUpdate(id, dto, {
            new: true,
            runValidators: true,
        })
    }

    async deleteUser(id: string): Promise<boolean> {
        const result = await this.userModel.deleteOne({ _id: id }).exec()
        return result.deletedCount > 0
    }
}
