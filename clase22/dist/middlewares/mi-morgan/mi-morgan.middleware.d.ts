import { NestMiddleware } from '@nestjs/common';
export declare class MiMorganMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
