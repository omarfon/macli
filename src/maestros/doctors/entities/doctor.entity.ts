import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Doctor {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    nombreCompleto: string;

    @Column()
    tipoDocumento:string;

    @Column()
    numeroDocumento:string;

    @Column()
    cmp:string;

    @Column()
    rne:string;

    @Column()
    especialidad:string;

}
