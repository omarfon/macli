import { PartialType } from '@nestjs/swagger';
import { CreatePrestacioneDto } from './create-prestacione.dto';

export class UpdatePrestacioneDto extends PartialType(CreatePrestacioneDto) {}
