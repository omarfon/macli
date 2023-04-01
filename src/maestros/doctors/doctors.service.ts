import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';
import { Repository } from 'typeorm';


@Injectable()
export class DoctorsService {

    constructor(@InjectRepository(Doctor) private doctorRepository: Repository<Doctor>){}

  findAll() {
    return this.doctorRepository.find();
  }

  async findOne(id: string) {
    const  userFound = await this.doctorRepository.findOne(
      {
        where:{
          id
        }
      });
      if(!userFound){
        return new HttpException('No se encuentr el usuario', HttpStatus.NOT_FOUND)
      }
      return userFound
  }

  async create(doctor: CreateDoctorDto) {
    const doctroFound = await this.doctorRepository.findOne({
      where:{
        id:doctor.id
      }
    })
    if(doctroFound){
      return new HttpException('El usuario ya existe', HttpStatus.CONFLICT)
    }
    
    const newUser = this.doctorRepository.create(doctor);
    return this.doctorRepository.save(newUser)
  } 

  update(id: string, updateDoctorDto: UpdateDoctorDto) {
    return this.doctorRepository.update({id} , updateDoctorDto)
  }

  delete(id: string) {
    return this.doctorRepository.delete({
      id
    })
  }

}
