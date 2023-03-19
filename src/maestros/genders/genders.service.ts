import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { v4 as uuid } from 'uuid';
import { Genero } from '../../interfaces/especialidad/genders.interface';

@Injectable()
export class GendersService {
  private genders: Genero[] = [
    {
      id:uuid(),
      name:"MASCULINO",
      nameConstraint:"MAS01",
      description:"género masculino",
      createAd:Date(),
      updateAd:Date()
    },
    {
      id:uuid(),
      name:"FEMENINO",
      nameConstraint:"FEM01",
      description:"género femenino",
      createAd:Date(),
      updateAd:Date()
    },
    {
      id:uuid(),
      name:"INDISTINTO",
      nameConstraint:"INDIS01",
      description:"género indistinto",
      createAd:Date(),
      updateAd:Date()
    }
  ]
  findAll() {
    return this.genders;
  }

  findOne(id: string) {
    const gender = this.genders.find(gender => gender.id === id);
      if(!gender) throw new NotFoundException(`El genero con el  ${id}, no existe`);
    return gender
  }

  create(createGenderDto: CreateGenderDto) {
    const gender: Genero = {
      id: uuid(),
      ...createGenderDto
    }
    console.log({createGenderDto});
    this.genders.push(gender);
    return gender;
  }


  update(id: string, updateGenderDto: UpdateGenderDto) {
    let genderDB = this.findOne(id);
    console.log({updateGenderDto});
    this.genders = this.genders.map(gender => {
        if(gender.id === id){
          genderDB = {...genderDB, ...updateGenderDto, id}
          return genderDB
        }
        return gender
    })
    return genderDB
  }

  delete(id: string) {
    const gender = this.findOne(id);
    this.genders = this.genders.filter(gender => gender.id !== id)
    return 
  }
}
