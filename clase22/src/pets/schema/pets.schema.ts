import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PetsDocument = HydratedDocument<Pets>;

@Schema()
export class Pets {
  @Prop()
  name: string;

  @Prop()
  specie: string;

  @Prop()
  age: number;
}

export const PetsSchema = SchemaFactory.createForClass(Pets);
