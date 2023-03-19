import { IsString, MinLength } from "class-validator";

export class CreateEspecialidadeDto {

    @IsString({message:'El Id es un string'})
    readonly id: string;

    @IsString()
    readonly specialtyId: string;

    @IsString()
    readonly name: string;
    
    @IsString()
    readonly description: string;

    @IsString()
    readonly createAd: string;

    @IsString()
    readonly updateAd: string;

}
