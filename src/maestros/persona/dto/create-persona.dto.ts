import { IsNumber, IsString } from "class-validator";

export class CreatePersonaDto {
    @IsNumber()
    readonly id: number;

    @IsNumber()
    readonly origen?: number;

    @IsString()
    readonly apellidoPaterno: string;

    @IsString()
    readonly apellidoMaterno: string;

    @IsString()
    readonly nombres: string;

    @IsString()
    readonly nombreCompleto?: string;

    @IsNumber()
    readonly tipoDocumento: number;

    @IsString()
    readonly documento: string;

    @IsNumber()
    readonly esCliente?: number;

    @IsNumber()
    readonly esproveedor?: number;

    @IsNumber()
    readonly esEmpleado?: number;

    @IsNumber()
    readonly esOtro?: number;

    @IsNumber()
    readonly tipoPersona: number;

    @IsString()
    readonly fechaNacimiento: string;

    @IsString()
    readonly ciudadNacimiento?: string;

    @IsString()
    readonly sexo: string;

    @IsString()
    readonly nacionalidad?: string;

    @IsNumber()
    readonly estadoCivil?: number;

    @IsString()
    readonly nivelInstruccion?: string;

    @IsString()
    readonly direccion: string;
    
    @IsString()
    readonly codigoPostal?: string;

    @IsString()
    readonly provincia?: string;

    @IsString()
    readonly departamento?: string;

    @IsString()
    readonly telefono: string;

    @IsString()
    readonly nombreEmergencia?: string;
    
    @IsString()
    readonly direccionEmergencia?: string;

    @IsString()
    readonly telefonoEmergencia?: string;

    @IsString()
    readonly personaAnterior?: string;

    @IsString()
    readonly correoElectronico: string;

    @IsNumber()
    readonly estado: number;

    @IsString()
    readonly ultimoUsuario?: string;

    @IsString()
    readonly ultimaFechaModificacion?: string;

    @IsString()
    readonly celular?: string;

    @IsString()
    readonly parentescoEmergencia?: string;

    @IsString()
    readonly celularEmergencia?: string;

    @IsString()
    readonly lugarNacimiento?: string;

    @IsString()
    readonly pais?: string;

    @IsNumber()
    readonly esPaciente?: number;

    @IsString()
    readonly cmp?: string;

    @IsString()
    readonly rutaFirma?: string;

}
