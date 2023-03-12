import { Test, TestingModule } from '@nestjs/testing';
import { DocumenTypesService } from './documen-types.service';

describe('DocumenTypesService', () => {
  let service: DocumenTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocumenTypesService],
    }).compile();

    service = module.get<DocumenTypesService>(DocumenTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
