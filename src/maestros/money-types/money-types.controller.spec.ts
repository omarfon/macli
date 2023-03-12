import { Test, TestingModule } from '@nestjs/testing';
import { MoneyTypesController } from './money-types.controller';
import { MoneyTypesService } from './money-types.service';

describe('MoneyTypesController', () => {
  let controller: MoneyTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoneyTypesController],
      providers: [MoneyTypesService],
    }).compile();

    controller = module.get<MoneyTypesController>(MoneyTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
