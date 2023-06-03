import { PassportMiddleware } from './passport.middleware';

describe('PassportMiddleware', () => {
  it('should be defined', () => {
    expect(new PassportMiddleware()).toBeDefined();
  });
});
