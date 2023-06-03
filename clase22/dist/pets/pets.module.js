"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsModule = void 0;
const common_1 = require("@nestjs/common");
const pets_service_1 = require("./pets.service");
const pets_controller_1 = require("./pets.controller");
const mongoose_1 = require("@nestjs/mongoose");
const pets_schema_1 = require("./schema/pets.schema");
const config_1 = require("@nestjs/config");
let PetsModule = exports.PetsModule = class PetsModule {
};
exports.PetsModule = PetsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: pets_schema_1.Pets.name,
                    schema: pets_schema_1.PetsSchema,
                },
            ]),
            config_1.ConfigModule,
        ],
        controllers: [pets_controller_1.PetsController],
        providers: [pets_service_1.PetsService],
    })
], PetsModule);
//# sourceMappingURL=pets.module.js.map