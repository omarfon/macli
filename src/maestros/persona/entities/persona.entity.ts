import { Optional } from "@nestjs/common";
import { Column, Entity, IsNull, PrimaryColumn } from "typeorm";

@Entity({name:'persona'})
export class Persona {

    @Column()
    @PrimaryColumn()
    readonly id: number;

    @Column()
    readonly origen: number;

    @Column()
    readonly apellidoPaterno: string;

    @Column()
    readonly apellidoMaterno: string;

    @Column()
    readonly nombres: string;

    @Column()
    readonly nombreCompleto: string;

    @Column()
    readonly tipoDocumento: number;

    @Column()
    readonly documento: string;

    @Column()
    readonly esCliente: number;

    @Column()
    readonly esproveedor: number;

    @Column()
    readonly esEmpleado: number;

    @Column()
    readonly esOtro: number;

    @Column()
    readonly tipoPersona: number;

    @Column()
    readonly fechaNacimiento: string;

    @Column()
    readonly ciudadNacimiento: string;

    @Column()
    readonly sexo: string;

    @Column()
    readonly nacionalidad: string;

    @Column()
    readonly estadoCivil: number;

    @Column()
    readonly nivelInstruccion: string;

    @Column()
    readonly direccion: string;
    
    @Column()
    readonly codigoPostal: string;

    @Column()
    readonly provincia: string;

    @Column()
    readonly departamento: string;

    @Column()
    readonly telefono: string;

    @Column()
    readonly nombreEmergencia: string;
    
    @Column()
    @Optional()
    readonly direccionEmergencia: string;

    @Column()
    readonly telefonoEmergencia: string;

    @Column()
    readonly personaAnterior: string;

    @Column()
    readonly correoElectronico: string;

    @Column()
    readonly estado: number;

    @Column()
    readonly ultimoUsuario: string;

    @Column()
    readonly ultimaFechaModificacion: string;

    @Column()
    readonly celular: string;

    @Column()
    readonly parentescoEmergencia: string;

    @Column()
    readonly celularEmergencia: string;

    @Column()
    readonly lugarNacimiento: string;

    @Column()
    readonly pais: string;

    @Column()
    readonly esPaciente: number;

    @Column()
    readonly cmp: string;

    @Column()
    readonly rutaFirma: string;
}
