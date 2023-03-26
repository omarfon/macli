import { IsString, IsNumber } from 'class-validator';

export class CreatePatientDto {
        @IsString()
        readonly id: string;

        @IsNumber()
        readonly IdPaciente: number;

        @IsNumber()
        readonly TipoPaciente: number;

        @IsString()
        readonly edad:string;

        @IsNumber()
        readonly razaId:number;

        @IsNumber()
        readonly religionId:number;

        @IsString()
        readonly areaLaboral:string;

        @IsString()
        readonly ocupacion:string;

        @IsString()
        readonly codigoHC:string;

        @IsString()
        readonly codigoHcAnterior:string;

        @IsString()
        readonly lugarProcedencia:string;

        @IsString()
        readonly fechaIngreso:string;

        @IsNumber()
        readonly estado:number;

        @IsString()
        readonly usuarioCreacion:string;

        @IsString()
        readonly createAd: string;

        @IsString()
        readonly ubicacionHc:string;

        @IsString()
        readonly situacion:string;

        @IsString()
        readonly fechaCreacionHc:string;
}
