import { Module } from '@nestjs/common'
import { DatabaseModule } from './database/database.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { ProductsModule } from './products/products.module'
import { OrdersModule } from './orders/orders.module'

@Module({
    imports: [DatabaseModule, AuthModule, UsersModule, ProductsModule, OrdersModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
