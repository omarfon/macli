import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEspecialidadeDto } from './dto/create-especialidade.dto';
import { UpdateEspecialidadeDto } from './dto/update-especialidade.dto';
import { v4 as uuid } from 'uuid';
import { Especialidad } from '../../interfaces/especialidad/especialidad.interface';


@Injectable()
export class EspecialidadesService {

  private especialidades: Especialidad[] = [
    {
      id:uuid(),
      specialtyId: 'CARDIO01',
      name:'Cardiología',
      description:'Especialidad que trata al corazón',
      createAd:Date(),
      updateAd: Date()
    },
    {
      id:uuid(),
      specialtyId: 'GINECO01',
      name:'Ginecología',
      description:'Especialidad que trata la chocha',
      createAd:Date(),
      updateAd: Date()
    },
    {
      id:uuid(),
      specialtyId: 'PEDIATRI01',
      name:'Pediatría',
      description:'Especialidad que trata a los niños',
      createAd:Date(),
      updateAd: Date()
    }
  ]
  findAll() {
    return this.especialidades;
  }

  findOne(id: string) {
   /*  return this.especialidades.filter(x => x.id === id); */
    const especialidad = this.especialidades.find(especialidad => especialidad.id === id);
    if(!especialidad) throw new NotFoundException(`La especialidad con el ${id}, no existe`)

    return especialidad
  }

  create(createEspecialidadeDto: CreateEspecialidadeDto) {
      const especialidad: Especialidad = {
          id: uuid(),
          ...createEspecialidadeDto
      }
      console.log({...createEspecialidadeDto});
        this.especialidades.push(especialidad);
        return especialidad;
}

  update(id: string, updateEspecialidadeDto: UpdateEspecialidadeDto) {
        let especialidadDB = this.findOne(id);

        this.especialidades = this.especialidades.map(especialidad => {
          if(especialidad.id === id){
            especialidadDB = {...especialidadDB, ...updateEspecialidadeDto, id }
            return especialidadDB
          }
          return especialidad
        })
    
        return especialidadDB
    
  }

  delete(id: string) {
    const especialidad = this.findOne(id);
    this.especialidades = this.especialidades.filter(especialidad => especialidad.id !== id)
    return 
  }
}
