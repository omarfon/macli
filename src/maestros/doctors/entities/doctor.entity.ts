import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'doctores'})
export class Doctor {

    @Column()
    @PrimaryColumn({unique:true})
    id: string;

    @Column()
    nombreCompleto: string;

    @Column()
    tipoDocumento:number;

    @Column({unique:true})
    numeroDocumento:string;

    @Column()
    cmp:string;

    @Column({nullable:true})
    rne:string;

    @Column()
    especialidad:number;

}
