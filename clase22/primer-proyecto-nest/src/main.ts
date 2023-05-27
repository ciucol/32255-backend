import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

const user = {
  name: 'mate',
  lastname: 'naranjo',
  email: 'mate@naran.com',
  password: 'mate123',
};
