import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { v4 as uuid } from 'uuid';
import { Patient } from '../../interfaces/especialidad/patient.interface';

@Injectable()
export class PatientsService {
  private pacientes : Patient[] = [
    {
      id: uuid(),
      IdPaciente: 1,
      TipoPaciente: 2,
      edad:'34',
      razaId:1,
      religionId:1,
      areaLaboral:'Programación',
      ocupacion:'Programador',
      codigoHC:'A345678',
      codigoHcAnterior:'A123456',
      lugarProcedencia:'Lima',
      fechaIngreso:Date(),
      estado:1,
      usuarioCreacion:'Omar Fonseca',
      createAd: Date(),
      ubicacionHc:'Perú',
      situacion:'Activo',
      fechaCreacionHc:Date(),
    }
  ]

  findAll() {
    return this.pacientes;
  }

  findOne(id: string) {
    const pacientes = this.pacientes.find(paciente => paciente.id == id);
    if(!pacientes) throw new NotFoundException(`El doctor con el id ${id}, no existe`)
    return pacientes;
  }

  create(createPatientDto: CreatePatientDto) {
    const paciente : Patient = {
      id:uuid(),
      ...createPatientDto
    }
    console.log({...createPatientDto})
    this.pacientes.push(paciente);
    return paciente
  }

  update(id: string, updatePatientDto: UpdatePatientDto) {
    let pacienteDB = this.findOne(id);
    this.pacientes = this.pacientes.map(paciente => {
      if(paciente.id === id){
        pacienteDB = {...pacienteDB, ...updatePatientDto, id}
        return pacienteDB
      }
      return paciente
    })
    return pacienteDB;
  }

  delete(id: string) {
      const paciente = this.findOne(id);
      this.pacientes = this.pacientes.filter(paciente => paciente.id === id);
    return `El paciente con${id} ha sido eliminado`;
  }
}
