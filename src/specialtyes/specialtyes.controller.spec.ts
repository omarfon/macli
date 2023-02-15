import { Test, TestingModule } from '@nestjs/testing';
import { SpecialtyesController } from './specialtyes.controller';
import { SpecialtyesService } from './specialtyes.service';

describe('SpecialtyesController', () => {
  let controller: SpecialtyesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpecialtyesController],
      providers: [SpecialtyesService],
    }).compile();

    controller = module.get<SpecialtyesController>(SpecialtyesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
