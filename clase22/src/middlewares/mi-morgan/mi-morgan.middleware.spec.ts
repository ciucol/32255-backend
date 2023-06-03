import { MiMorganMiddleware } from './mi-morgan.middleware';

describe('MiMorganMiddleware', () => {
  it('should be defined', () => {
    expect(new MiMorganMiddleware()).toBeDefined();
  });
});
