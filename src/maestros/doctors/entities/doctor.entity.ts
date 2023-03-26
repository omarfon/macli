import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'doctores'})
export class Doctor {

    @Column()
    @PrimaryColumn()
    id: string;

    @Column()
    nombreCompleto: string;

    @Column({unique:true})
    tipoDocumento:number;

    @Column()
    numeroDocumento:string;

    @Column()
    cmp:string;

    @Column({nullable:true})
    rne:string;

    @Column()
    especialidad:number;

}
