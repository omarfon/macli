import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Controller('maestros/doctors')
@ApiTags('Maestros / Doctores')
export class DoctorsMaestroController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post()
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorsService.create(createDoctorDto);
  }

  @Get()
  findAll() {
    return this.doctorsService.findAll();
  }

 /*  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctorsService.findOne(id);
  } */

/*   @Patch(':id')
  update(@Param('id') id: string, @Body() updateDoctorDto: UpdateDoctorDto) {
    return this.doctorsService.update(id, updateDoctorDto);
  } */

 /*  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctorsService.delete(id);
  } */
}
