// tests/logger.test.ts
import { logger } from '../src/utils/logger';

describe('Logger Utility', () => {
  it('should log different levels without throwing', () => {
    expect(() => {
      logger.info('This is an info message');
      logger.success('This is a success message');
      logger.warn('This is a warning');
      logger.error('This is an error message');
      logger.route('GET', '/test', 200, 1.23);
    }).not.toThrow();
  });
});
