import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDocumenTypeDto } from './dto/create-documen-type.dto';
import { UpdateDocumenTypeDto } from './dto/update-documen-type.dto';
import { v4 as uuid } from 'uuid';
import { Document } from '../../interfaces/especialidad/documents.interface';

@Injectable()
export class DocumenTypesService {
  private documentTypes: Document[] = [
    {
      id:uuid(),
      documentId:"1",
      name:"DNI",
      description:"Documento Nacional de identidad",
      createAd:Date(),
      updateAd: Date()
    },
    {
      id:uuid(),
      documentId:"2",
      name:"Carnet Extranjeria",
      description:"Carnet de extranjeria",
      createAd:Date(),
      updateAd: Date()
    },
    {
      id:uuid(),
      documentId:"3",
      name:"PASAPORTE",
      description:"Documento pasaporte",
      createAd:Date(),
      updateAd: Date()
    }
  ]

  findAll() {
    return this.documentTypes;
  }

  findOne(id: string) {
    const documentTypes = this.documentTypes.find(document => document.id === id);
      if(!documentTypes) throw new NotFoundException(`El documento con el id ${id}, no existe`)

    return documentTypes
  }

  create(createDocumenTypeDto: CreateDocumenTypeDto) {
    const documento: Document = {
      id:uuid(),
      ...createDocumenTypeDto
    }
    console.log({...createDocumenTypeDto});
    this.documentTypes.push(documento);
    return documento
  }


  update(id: string, updateDocumenTypeDto: UpdateDocumenTypeDto) {
    let documentDB = this.findOne(id);
    this.documentTypes = this.documentTypes.map(document => {
      if(document.id === id){
        documentDB = {...documentDB, ...updateDocumenTypeDto, id}
        return documentDB
      }
      return document
    })
    return documentDB
  }

  delete(id: string) {
    const document = this.findOne(id);
    this.documentTypes = this.documentTypes.filter(document => document.id === id)
    return 
  }
}
