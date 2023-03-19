import { PartialType } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';
import { CreateGenderDto } from './create-gender.dto';

export class UpdateGenderDto extends PartialType(CreateGenderDto) {
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id: string;

    @IsString()
    @IsOptional()
    readonly name?: string;

    @IsString()
    @IsOptional()
    readonly nameConstraint?: string;

    @IsString()
    @IsOptional()
    readonly description?:string;

    @IsString()
    @IsOptional()
    readonly createAd?: string;

    @IsString()
    readonly updateAd: string;
}
