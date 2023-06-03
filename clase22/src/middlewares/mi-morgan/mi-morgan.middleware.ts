import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class MiMorganMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(
      `${req.method} at ${req.url} received ${new Date().toISOString()}`,
    );
    next();
  }
}
