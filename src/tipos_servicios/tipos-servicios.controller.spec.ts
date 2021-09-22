import { Test, TestingModule } from '@nestjs/testing';
import { TiposServiciosController } from './tipos-servicios.controller';

describe('TiposServiciosController', () => {
  let controller: TiposServiciosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposServiciosController],
    }).compile();

    controller = module.get<TiposServiciosController>(TiposServiciosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
