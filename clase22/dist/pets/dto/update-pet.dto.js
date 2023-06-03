"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePetDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_pet_dto_1 = require("./create-pet.dto");
class UpdatePetDto extends (0, mapped_types_1.PartialType)(create_pet_dto_1.CreatePetDto) {
}
exports.UpdatePetDto = UpdatePetDto;
//# sourceMappingURL=update-pet.dto.js.map