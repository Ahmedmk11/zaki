import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as cookieParser from 'cookie-parser'
import { AllExceptionsFilter } from './all-exceptions/all-exceptions.filter'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.useGlobalFilters(new AllExceptionsFilter())
    app.use(cookieParser())

    app.enableCors({
        origin:
            process.env.PRODUCTION === 'true'
                ? process.env.CLIENT_URL_PRODUCTION
                : process.env.CLIENT_URL_DEVELOPMENT,
        credentials: true,
    })

    await app.listen(process.env.PORT ?? 3000)
    console.log(`🚀 Server is running on ${process.env.PORT ?? 3000}`)
}
bootstrap()
