import { PartialType } from '@nestjs/swagger';
import { CreateSpecialtyeDto } from './create-specialtye.dto';

export class UpdateSpecialtyeDto extends PartialType(CreateSpecialtyeDto) {}
