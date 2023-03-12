import { Test, TestingModule } from '@nestjs/testing';
import { PrestacionesController } from './prestaciones.controller';
import { PrestacionesService } from './prestaciones.service';

describe('PrestacionesController', () => {
  let controller: PrestacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrestacionesController],
      providers: [PrestacionesService],
    }).compile();

    controller = module.get<PrestacionesController>(PrestacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
