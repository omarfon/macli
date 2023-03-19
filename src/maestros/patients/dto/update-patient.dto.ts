import { PartialType } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { CreatePatientDto } from './create-patient.dto';

export class UpdatePatientDto extends PartialType(CreatePatientDto) {
        @IsString()
        @IsUUID()
        @IsOptional()
        readonly id: string;

        @IsNumber()
        @IsOptional()
        readonly IdPaciente: number;

        @IsNumber()
        @IsOptional()
        readonly TipoPaciente: number;

        @IsString()
        @IsOptional()
        readonly edad:string;

        @IsNumber()
        @IsOptional()
        readonly razaId?:number;

        @IsNumber()
        @IsOptional()
        readonly religionId?:number;

        @IsString()
        @IsOptional()
        readonly areaLaboral?:string;

        @IsString()
        @IsOptional()
        readonly ocupacion?:string;

        @IsString()
        @IsOptional()
        readonly codigoHC?:string;

        @IsString()
        @IsOptional()
        readonly codigoHcAnterior?:string;

        @IsString()
        @IsOptional()
        readonly lugarProcedencia:string;

        @IsString()
        @IsOptional()
        readonly fechaIngreso:string;

        @IsNumber()
        @IsOptional()
        readonly estado:number;

        @IsString()
        @IsOptional()
        readonly usuarioCreacion:string;

        @IsString()
        @IsOptional()
        readonly createAd: string;

        @IsString()
        @IsOptional()
        readonly ubicacionHc:string;

        @IsString()
        @IsOptional()
        readonly situacion:string;

        @IsString()
        @IsOptional()
        readonly fechaCreacionHc:string;
}
