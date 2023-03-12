import { Module } from '@nestjs/common';
import { PrestacionesService } from './prestaciones.service';
import { PrestacionesController } from './prestaciones.controller';

@Module({
  controllers: [PrestacionesController],
  providers: [PrestacionesService]
})
export class PrestacionesModule {}
