import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Pets, PetsDocument } from './schema/pets.schema';
import { Model } from 'mongoose';

@Injectable()
export class PetsService {
  constructor(
    @InjectModel(Pets.name)
    private readonly petsService: Model<PetsDocument>,
  ) {}

  async create(createPetDto: CreatePetDto) {
    return await this.petsService.create(createPetDto);
  }

  async findAll() {
    return await this.petsService.find();
  }

  async findOne(id: string) {
    return await this.petsService.findById(id);
  }

  async update(id: string, updatePetDto: UpdatePetDto) {
    return await this.petsService.updateOne({ _id: id }, updatePetDto);
  }

  async remove(id: string) {
    return await this.petsService.deleteOne({ _id: id });
  }
}
