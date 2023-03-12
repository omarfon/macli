import { Test, TestingModule } from '@nestjs/testing';
import { PrestacionesService } from './prestaciones.service';

describe('PrestacionesService', () => {
  let service: PrestacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrestacionesService],
    }).compile();

    service = module.get<PrestacionesService>(PrestacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
