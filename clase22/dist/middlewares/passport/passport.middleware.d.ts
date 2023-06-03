import { NestMiddleware } from '@nestjs/common';
export declare class PassportMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
