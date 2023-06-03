import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pets, PetsSchema } from './schema/pets.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Pets.name,
        schema: PetsSchema,
      },
    ]),
    ConfigModule,
  ],
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetsModule {}
