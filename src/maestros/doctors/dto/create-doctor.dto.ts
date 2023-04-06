import { IsString, IsNumber } from 'class-validator';

export class CreateDoctorDto {

    @IsString()
     readonly id: string;

     @IsString()
     readonly nombreCompleto: string;

     @IsString()
     readonly tipoDocumento:string;

     @IsString()
     readonly numeroDocumento:string;

     @IsString()
     readonly cmp:string;

     @IsString()
     readonly rne:string;

     @IsString()
     readonly especialidad:string;

}
