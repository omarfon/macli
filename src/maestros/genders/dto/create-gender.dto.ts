import { IsString } from "class-validator";

export class CreateGenderDto {
    @IsString()
    readonly id: string;

    @IsString()
    readonly name: string;

    @IsString()
    readonly nameConstraint: string;

    @IsString()
    readonly description:string;

    @IsString()
    readonly createAd: string;

    @IsString()
    readonly updateAd: string;
}
