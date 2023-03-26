import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrestacionesService } from './prestaciones.service';
import { CreatePrestacioneDto } from './dto/create-prestacione.dto';
import { UpdatePrestacioneDto } from './dto/update-prestacione.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('prestaciones')
@ApiTags('Maestros/Prestaciones')
export class PrestacionesController {
  constructor(private readonly prestacionesService: PrestacionesService) {}

  @Post()
  create(@Body() createPrestacioneDto: CreatePrestacioneDto) {
    return this.prestacionesService.create(createPrestacioneDto);
  }

  @Get()
  findAll() {
    return this.prestacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prestacionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrestacioneDto: UpdatePrestacioneDto) {
    return this.prestacionesService.update(+id, updatePrestacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prestacionesService.remove(+id);
  }
}
