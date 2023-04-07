import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonaService {

  constructor(@InjectRepository(Persona) private personaRepository: Repository<Persona>){}

  findAll() {
    return this.personaRepository.find();
  }

  async findOne(id: number) {
    const  userFound = await this.personaRepository.findOne(
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

  async create(persona: CreatePersonaDto) {
    const doctroFound = await this.personaRepository.findOne({
      where:{
        id:persona.id
      }
    })
    if(doctroFound){
      return new HttpException('El usuario ya existe', HttpStatus.CONFLICT)
    }
    
    const newUser = this.personaRepository.create(persona);
    return this.personaRepository.save(newUser)
  }

  async update(id: number, persona: UpdatePersonaDto) {
    const userFound = await this.personaRepository.findOne({
      where:{
        id
      }
    })
    if(!userFound){
      return new HttpException('El usuario no fue encontrado', HttpStatus.NOT_FOUND);
    }
    const updateDoctor = Object.assign(userFound, persona);
    return this.personaRepository.save(updateDoctor);
  }

  async delete(id: number) {
    const result =  await this.personaRepository.delete({id});

      if( result.affected === 0){
        return new HttpException('El usuario no se encontró', HttpStatus.NOT_FOUND);
      }
    return result
  }
}
