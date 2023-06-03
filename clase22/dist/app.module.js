"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("./users/users.module");
const products_module_1 = require("./products/products.module");
const mongoose_1 = require("@nestjs/mongoose");
const pets_module_1 = require("./pets/pets.module");
const mi_morgan_middleware_1 = require("./middlewares/mi-morgan/mi-morgan.middleware");
const config_1 = require("@nestjs/config");
let AppModule = exports.AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(mi_morgan_middleware_1.MiMorganMiddleware)
            .forRoutes({ path: '*', method: common_1.RequestMethod.ALL });
    }
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    uri: `mongodb+srv://${configService.get('DB_USER')}:${configService.get('DB_PASS')}@${configService.get('DB_HOST')}`,
                }),
            }),
            users_module_1.UsersModule,
            products_module_1.ProductsModule,
            pets_module_1.PetsModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map