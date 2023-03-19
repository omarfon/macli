import { PartialType } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { CreateDocumenTypeDto } from './create-documen-type.dto';

export class UpdateDocumenTypeDto extends PartialType(CreateDocumenTypeDto) {
    
    @IsString({message:'El Id es un string'})
    @IsOptional()
    @IsUUID()
    readonly id?: string;

    @IsString()
    @IsOptional()
    readonly documentId?: string;

    @IsString()
    @IsOptional()
    readonly name?: string;
    
    @IsString()
    @IsOptional()
    readonly description?: string;
    
    @IsString()
    @IsOptional()
    readonly createAd?: string;

    @IsString()
    readonly updateAd: string;
}
