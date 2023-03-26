import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor } from '../../interfaces/especialidad/doctors.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class DoctorsService {

  private doctors : Doctor[]=[
    {
        id:uuid(),
        nombreCompleto:"Omar Fonseca García",
        tipoDocumento:1,
        numeroDocumento:"40283800",
        cmp:"009876",
        rne:"90765",
        especialidad:34

    }
  ]


  findAll() {
    return this.doctors;
  }

  findOne(id: string) {
    const doctor = this.doctors.find(doctor => doctor.id === id);
    if(!doctor) throw new NotFoundException(`No se encuenta al doctor con el ${id}`)
    return doctor
  }

  create(createDoctorDto: CreateDoctorDto) {
    const doctor : Doctor = {
      id:uuid(),
      ...createDoctorDto
    }
    console.log({...createDoctorDto})
    this.doctors.push(doctor);
    return doctor
  }

  update(id: string, updateDoctorDto: UpdateDoctorDto) {
    let doctorDB = this.findOne(id);
    this.doctors = this.doctors.map(doctor => {
      if(doctor.id === id){
        doctorDB = {...doctorDB, ...updateDoctorDto, id}
        return  doctorDB
      }
      return doctor
    })
    return doctorDB;
  }

  delete(id: string) {
    const doctor = this.findOne(id);
    this.doctors = this.doctors.filter(doctor => doctor.id === id)
    return `Se ha eliminado al doctor con id: #${id}`;
  }
}
