import { Injectable } from '@nestjs/common';
import { CreatePrestacioneDto } from './dto/create-prestacione.dto';
import { UpdatePrestacioneDto } from './dto/update-prestacione.dto';

@Injectable()
export class PrestacionesService {
  create(createPrestacioneDto: CreatePrestacioneDto) {
    return 'This action adds a new prestacione';
  }

  findAll() {
    return `This action returns all prestaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prestacione`;
  }

  update(id: number, updatePrestacioneDto: UpdatePrestacioneDto) {
    return `This action updates a #${id} prestacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} prestacione`;
  }
}
