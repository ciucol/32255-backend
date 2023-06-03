import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PetsModule } from './pets/pets.module';
import { MiMorganMiddleware } from './middlewares/mi-morgan/mi-morgan.middleware';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        // uri: configService.get<string>('MONGO_URL'),
        uri: `mongodb+srv://${configService.get('DB_USER')}:${configService.get(
          'DB_PASS',
        )}@${configService.get('DB_HOST')}`,
      }),
    }),
    UsersModule,
    ProductsModule,
    PetsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MiMorganMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
