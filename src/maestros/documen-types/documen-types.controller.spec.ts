import { Test, TestingModule } from '@nestjs/testing';
import { DocumenTypesController } from './documen-types.controller';
import { DocumenTypesService } from './documen-types.service';

describe('DocumenTypesController', () => {
  let controller: DocumenTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumenTypesController],
      providers: [DocumenTypesService],
    }).compile();

    controller = module.get<DocumenTypesController>(DocumenTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
