import { Module } from '@nestjs/common'
import { DatabaseModule } from './database/database.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { ProductsModule } from './products/products.module'
import { OrdersModule } from './orders/orders.module'
import { MailModule } from './utils/mailer/mail.module'
import { ConfigModule } from '@nestjs/config'

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        DatabaseModule,
        AuthModule,
        UsersModule,
        ProductsModule,
        OrdersModule,
        MailModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
