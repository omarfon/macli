import { Module } from '@nestjs/common';
import { DocumenTypesService } from './documen-types.service';
import { DocumenTypesController } from './documen-types.controller';

@Module({
  controllers: [DocumenTypesController],
  providers: [DocumenTypesService]
})
export class DocumenTypesModule {}
