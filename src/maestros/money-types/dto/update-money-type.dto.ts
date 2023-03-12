import { PartialType } from '@nestjs/swagger';
import { CreateMoneyTypeDto } from './create-money-type.dto';

export class UpdateMoneyTypeDto extends PartialType(CreateMoneyTypeDto) {}
