import { Test, TestingModule } from '@nestjs/testing';
import { AppResolver } from './app.resolver';

describe('AppResolver', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      providers: [AppResolver],
    }).compile();
  });

  describe('HealthCheck', () => {
    it('should return "Welcome to api!"', () => {
      const appController = app.get<AppResolver>(AppResolver);
      expect(appController.healthCheck()).toEqual('Health Check');
    });
  });
});
