import { PartialType } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateDoctorDto } from './create-doctor.dto';

export class UpdateDoctorDto extends PartialType(CreateDoctorDto) {
    @IsString()
    @IsOptional()
     readonly id?: string;

     @IsString()
     @IsOptional()
     readonly nombreCompleto?: string;

     @IsString()
     @IsOptional()
     readonly tipoDocumento?:string;

     @IsString()
     @IsOptional()
     readonly numeroDocumento?:string;

     @IsString()
     @IsOptional()
     readonly cmp?:string;

     @IsString()
     @IsOptional()
     readonly rne?:string;

     @IsString()
     @IsOptional()
     readonly especialidad?:string;
}
