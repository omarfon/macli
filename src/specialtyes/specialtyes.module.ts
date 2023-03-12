import { Module } from '@nestjs/common';
import { SpecialtyesService } from './specialtyes.service';
import { SpecialtyesController } from './specialtyes.controller';
import { v4 as uuidv4 } from 'uuid';

@Module({
  controllers: [SpecialtyesController],
  providers: [SpecialtyesService]
})
export class SpecialtyesModule {}
