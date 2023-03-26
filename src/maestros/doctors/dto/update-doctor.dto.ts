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

     @IsNumber()
     @IsOptional()
     readonly tipoDocumento?:number;

     @IsString()
     @IsOptional()
     readonly numeroDocumento?:string;

     @IsString()
     @IsOptional()
     readonly cmp?:string;

     @IsString()
     @IsOptional()
     readonly rne?:string;

     @IsNumber()
     @IsOptional()
     readonly especialidad?:number;
}
