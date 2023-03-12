import { Injectable } from '@nestjs/common';
import { CreateDocumenTypeDto } from './dto/create-documen-type.dto';
import { UpdateDocumenTypeDto } from './dto/update-documen-type.dto';

@Injectable()
export class DocumenTypesService {
  
  create(createDocumenTypeDto: CreateDocumenTypeDto) {
    return 'This action adds a new documenType';
  }

  findAll() {
    return `This action returns all documenTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} documenType`;
  }

  update(id: number, updateDocumenTypeDto: UpdateDocumenTypeDto) {
    return `This action updates a #${id} documenType`;
  }

  remove(id: number) {
    return `This action removes a #${id} documenType`;
  }
}
