import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { SpecialtyesService } from './specialtyes.service';
import { CreateSpecialtyeDto } from './dto/create-specialtye.dto';
import { UpdateSpecialtyeDto } from './dto/update-specialtye.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('specialtyes')
@ApiTags('Especialidades Endpoints')
export class SpecialtyesController {
  constructor(private readonly specialtyesService: SpecialtyesService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createSpecialtyeDto: CreateSpecialtyeDto) {
    return this.specialtyesService.create(createSpecialtyeDto);
  }

  @Get()
  findAll() {
    return this.specialtyesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.specialtyesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpecialtyeDto: UpdateSpecialtyeDto) {
    return this.specialtyesService.update(+id, updateSpecialtyeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.specialtyesService.remove(+id);
  }
}
