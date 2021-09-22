import { Test, TestingModule } from '@nestjs/testing';
import { TiposServiciosService } from './tipos-servicios.service';

describe('TiposServiciosService', () => {
  let service: TiposServiciosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposServiciosService],
    }).compile();

    service = module.get<TiposServiciosService>(TiposServiciosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
