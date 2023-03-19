import { IsString } from "class-validator";

export class CreateDocumenTypeDto {
    @IsString({message:'El Id es un string'})
    readonly id: string;

    @IsString()
    readonly documentId: string;

    @IsString()
    readonly name: string;
    
    @IsString()
    readonly description: string;
    
    @IsString()
    readonly constraint: string;
}