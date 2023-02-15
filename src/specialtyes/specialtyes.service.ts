import { Injectable } from '@nestjs/common';
import { CreateSpecialtyeDto } from './dto/create-specialtye.dto';
import { UpdateSpecialtyeDto } from './dto/update-specialtye.dto';

@Injectable()
export class SpecialtyesService {
  create(createSpecialtyeDto: CreateSpecialtyeDto) {
    return 'This action adds a new specialtye';
  }

  findAll() {
    return `This action returns all specialtyes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} specialtye`;
  }

  update(id: number, updateSpecialtyeDto: UpdateSpecialtyeDto) {
    return `This action updates a #${id} specialtye`;
  }

  remove(id: number) {
    return `This action removes a #${id} specialtye`;
  }
}
