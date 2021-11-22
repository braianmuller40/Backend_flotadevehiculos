import { Test, TestingModule } from '@nestjs/testing';
import { ApiChargeService } from './api-charge.service';

describe('ApiChargeService', () => {
  let service: ApiChargeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiChargeService],
    }).compile();

    service = module.get<ApiChargeService>(ApiChargeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
