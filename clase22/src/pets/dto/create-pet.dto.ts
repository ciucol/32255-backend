import { IsNumber, IsString } from 'class-validator';

export class CreatePetDto {
  @IsString()
  name: string;

  @IsString()
  specie: string;

  @IsNumber()
  age: number;
}
