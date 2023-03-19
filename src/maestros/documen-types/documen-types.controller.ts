import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumenTypesService } from './documen-types.service';
import { CreateDocumenTypeDto } from './dto/create-documen-type.dto';
import { UpdateDocumenTypeDto } from './dto/update-documen-type.dto';

@Controller('documen-types')
export class DocumenTypesController {
  constructor(private readonly documenTypesService: DocumenTypesService) {}

  @Post()
  create(@Body() createDocumenTypeDto: CreateDocumenTypeDto) {
    return this.documenTypesService.create(createDocumenTypeDto);
  }

  @Get()
  findAll() {
    return this.documenTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documenTypesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocumenTypeDto: UpdateDocumenTypeDto) {
    return this.documenTypesService.update(id, updateDocumenTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documenTypesService.delete(id);
  }
}
