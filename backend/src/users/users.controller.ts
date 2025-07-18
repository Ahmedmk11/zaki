import { Controller, Get, Param, Patch, Delete, Body, NotFoundException } from '@nestjs/common'
import { UsersService } from './users.service'
import { UpdateUserDto } from './dto/update-user.dto'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get(':id')
    async getUser(@Param('id') id: string) {
        const user = await this.usersService.findById(id)
        if (!user) throw new NotFoundException('User not found')
        return user
    }

    @Patch(':id')
    async updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto) {
        const updated = await this.usersService.updateUser(id, dto)
        if (!updated) throw new NotFoundException('User not found')
        return updated
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        const deleted = await this.usersService.deleteUser(id)
        if (!deleted) throw new NotFoundException('User not found')
        return { message: 'User deleted successfully' }
    }
}
