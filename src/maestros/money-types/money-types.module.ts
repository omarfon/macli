import { Module } from '@nestjs/common';
import { MoneyTypesService } from './money-types.service';
import { MoneyTypesController } from './money-types.controller';

@Module({
  controllers: [MoneyTypesController],
  providers: [MoneyTypesService]
})
export class MoneyTypesModule {}
