import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsMaestroController } from './doctors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Doctor])],
  controllers: [DoctorsMaestroController],
  providers: [DoctorsService]
})
export class DoctorsModuleMaster {}
