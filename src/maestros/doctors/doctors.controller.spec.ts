import { Test, TestingModule } from '@nestjs/testing';
import { DoctorsMaestroController } from './doctors.controller';
import { DoctorsService } from './doctors.service';

describe('DoctorsMaestroController', () => {
  let controller: DoctorsMaestroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoctorsMaestroController],
      providers: [DoctorsService],
    }).compile();

    controller = module.get<DoctorsMaestroController>(DoctorsMaestroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
