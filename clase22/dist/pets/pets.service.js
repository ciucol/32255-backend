"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const pets_schema_1 = require("./schema/pets.schema");
const mongoose_2 = require("mongoose");
let PetsService = exports.PetsService = class PetsService {
    constructor(petsService) {
        this.petsService = petsService;
    }
    async create(createPetDto) {
        return await this.petsService.create(createPetDto);
    }
    async findAll() {
        return await this.petsService.find();
    }
    async findOne(id) {
        return await this.petsService.findById(id);
    }
    async update(id, updatePetDto) {
        return await this.petsService.updateOne({ _id: id }, updatePetDto);
    }
    async remove(id) {
        return await this.petsService.deleteOne({ _id: id });
    }
};
exports.PetsService = PetsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(pets_schema_1.Pets.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PetsService);
//# sourceMappingURL=pets.service.js.map