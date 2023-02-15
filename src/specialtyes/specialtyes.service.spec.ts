import { Test, TestingModule } from '@nestjs/testing';
import { SpecialtyesService } from './specialtyes.service';

describe('SpecialtyesService', () => {
  let service: SpecialtyesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpecialtyesService],
    }).compile();

    service = module.get<SpecialtyesService>(SpecialtyesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
