import { PartialType } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';
import { CreateEspecialidadeDto } from './create-especialidade.dto';

export class UpdateEspecialidadeDto extends PartialType(CreateEspecialidadeDto) {
    @IsString({message:'El Id es un string'})
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString()
    @IsOptional()
    readonly specialtyId?: string;

    @IsString()
    @IsOptional()
    readonly name?: string;
    
    @IsString()
    @IsOptional()
    readonly description?: string;
}
