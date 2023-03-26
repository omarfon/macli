import { IsString, IsNumber } from 'class-validator';

export class CreateDoctorDto {

    @IsString()
     readonly id: string;

     @IsString()
     readonly nombreCompleto: string;

     @IsNumber()
     readonly tipoDocumento:number;

     @IsString()
     readonly numeroDocumento:string;

     @IsString()
     readonly cmp:string;

     @IsString()
     readonly rne:string;

     @IsNumber()
     readonly especialidad:number;

}
