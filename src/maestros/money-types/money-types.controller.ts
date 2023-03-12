import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MoneyTypesService } from './money-types.service';
import { CreateMoneyTypeDto } from './dto/create-money-type.dto';
import { UpdateMoneyTypeDto } from './dto/update-money-type.dto';

@Controller('money-types')
export class MoneyTypesController {
  constructor(private readonly moneyTypesService: MoneyTypesService) {}

  @Post()
  create(@Body() createMoneyTypeDto: CreateMoneyTypeDto) {
    return this.moneyTypesService.create(createMoneyTypeDto);
  }

  @Get()
  findAll() {
    return this.moneyTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moneyTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMoneyTypeDto: UpdateMoneyTypeDto) {
    return this.moneyTypesService.update(+id, updateMoneyTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moneyTypesService.remove(+id);
  }
}
