import { Module } from '@nestjs/common';
import { SpecialtyesService } from './specialtyes.service';
import { SpecialtyesController } from './specialtyes.controller';

@Module({
  controllers: [SpecialtyesController],
  providers: [SpecialtyesService]
})
export class SpecialtyesModule {}
