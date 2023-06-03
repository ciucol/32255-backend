"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiMorganMiddleware = void 0;
const common_1 = require("@nestjs/common");
let MiMorganMiddleware = exports.MiMorganMiddleware = class MiMorganMiddleware {
    use(req, res, next) {
        console.log(`${req.method} at ${req.url} received ${new Date().toISOString()}`);
        next();
    }
};
exports.MiMorganMiddleware = MiMorganMiddleware = __decorate([
    (0, common_1.Injectable)()
], MiMorganMiddleware);
//# sourceMappingURL=mi-morgan.middleware.js.map