import { Test, TestingModule } from '@nestjs/testing';
import { MoneyTypesService } from './money-types.service';

describe('MoneyTypesService', () => {
  let service: MoneyTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoneyTypesService],
    }).compile();

    service = module.get<MoneyTypesService>(MoneyTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
