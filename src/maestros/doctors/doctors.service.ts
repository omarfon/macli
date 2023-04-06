import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from 'src/doctors/entities/doctor.entity';
import { Repository } from 'typeorm';


@Injectable()
export class DoctorsService {

    constructor(@InjectRepository(Doctor) private doctorRepository: Repository<Doctor>){}
 /*  private doctors : Doctor[]=[
    {
        id:uuid(),
        nombreCompleto:"Omar Fonseca García",
        tipoDocumento:1,
        numeroDocumento:"40283800",
        cmp:"009876",
        rne:"90765",
        especialidad:34

    }
  ] */


  async findAll() {
    try{
      return this.doctorRepository;
    }
    catch(error){
      return error
    }
  }

 /*  findOne(id: string) {
    const doctor = this.doctorRepository.find(doctor => doctor.id === id);
    if(!doctor) throw new NotFoundException(`No se encuenta al doctor con el ${id}`)
    return doctor
  } */

  async create(createDoctorDto: CreateDoctorDto) {
    try{
      const doctor : Doctor = {
        id:uuid(),
        ...createDoctorDto
      }
      console.log({...createDoctorDto})
      await this.doctorRepository.save(doctor);
      return doctor
    } catch (error){
      console.log(error)
      return error
    }
  }

/*   update(id: string, updateDoctorDto: UpdateDoctorDto) {
    let doctorDB = this.findOne(id);
    this.doctorRepository = this.doctorRepository.map(doctor => {
      if(doctor.id === id){
        doctorDB = {...doctorDB, ...updateDoctorDto, id}
        return  doctorDB
      }
      return doctor
    })
    return doctorDB;
  } */

/*   delete(id: string) {
    const doctor = this.findOne(id);
    this.doctorRepository = this.doctorRepository.filter(doctor => doctor.id === id)
    return `Se ha eliminado al doctor con id: #${id}`;
  } */
}
