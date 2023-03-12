import { PartialType } from '@nestjs/swagger';
import { CreateDocumenTypeDto } from './create-documen-type.dto';

export class UpdateDocumenTypeDto extends PartialType(CreateDocumenTypeDto) {}
