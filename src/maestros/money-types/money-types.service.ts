import { Injectable } from '@nestjs/common';
import { CreateMoneyTypeDto } from './dto/create-money-type.dto';
import { UpdateMoneyTypeDto } from './dto/update-money-type.dto';

@Injectable()
export class MoneyTypesService {
  create(createMoneyTypeDto: CreateMoneyTypeDto) {
    return 'This action adds a new moneyType';
  }

  findAll() {
    return `This action returns all moneyTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} moneyType`;
  }

  update(id: number, updateMoneyTypeDto: UpdateMoneyTypeDto) {
    return `This action updates a #${id} moneyType`;
  }

  remove(id: number) {
    return `This action removes a #${id} moneyType`;
  }
}
