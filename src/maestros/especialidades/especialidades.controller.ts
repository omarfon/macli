import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { EspecialidadesService } from './especialidades.service';
import { CreateEspecialidadeDto } from './dto/create-especialidade.dto';
import { UpdateEspecialidadeDto } from './dto/update-especialidade.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('especialidades')
@ApiTags('Maestros/Especialidades')
export class EspecialidadesController {
  constructor(private readonly especialidadesService: EspecialidadesService) {}

  @Get()
  findAll() {
    return this.especialidadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.especialidadesService.findOne(id);
  }

  @Post()
  createEspecialidad(@Body() createEspecialidadeDto: CreateEspecialidadeDto) {
    return this.especialidadesService.create(createEspecialidadeDto);
  } 


  @Patch(':id')
  updateEspecialidad(
      @Param('id') id: string, 
      @Body() updateEspecialidadeDto: UpdateEspecialidadeDto) 
      {
        /* return updateEspecialidadeDto; */
        return this.especialidadesService.update(id, updateEspecialidadeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.especialidadesService.delete(id);
  }
}
