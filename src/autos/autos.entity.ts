import { Agendamientos } from "src/agendamientos/agendamientos.entity";
import { Disponibilidad } from "src/enums/disponibilidad.enum";
import { Servicios } from "src/servicios/servicios.entity";
import { genericAtributes } from "src/shared/abstract/generic-atributes";
import { Column, Double, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Autos extends genericAtributes{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    chapa: string;

    @Column()
    chassis: string;

    @Column()
    fabricante: string;

    @Column()
    modelo: string;

    @Column()
    kilometraje: number;

    @Column()
    ano_modelo: number;

    @Column()
    ano_fabricacion: number;
    
    @Column({type: "enum", enum:Disponibilidad})
    disponibilidad: Disponibilidad;

    @OneToMany(() => Servicios,Servicios => Servicios.auto)
    servicios:Servicios[];

    @OneToMany(() => Agendamientos,Agendamientos => Agendamientos.auto)
    agendamientos:Agendamientos[];
}