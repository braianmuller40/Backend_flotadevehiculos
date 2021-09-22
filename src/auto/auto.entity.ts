import { IsEnum } from "class-validator";
import { Disponibilidad } from "src/enums/Disponibilidad.enum";
import { Servicio } from "src/servicio/servicio.entity";
import { genericAtributes } from "src/shared/abstract/generic-atributes";
import { Column, Double, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Auto extends genericAtributes{
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
    anoModelo: number;

    @Column()
    anoFabricacion: number;
    
    @IsEnum(Disponibilidad)
    disponibilidad: Disponibilidad;

    @OneToMany(() => Servicio,Servicio => Servicio.auto)
    servicios:Servicio[];
}