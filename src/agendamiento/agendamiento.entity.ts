import {  IsEnum } from "class-validator";
import { TipoAgendamiento } from "src/enums/tipoAgendamiento.enum";
import { TipoPeriodo } from "src/enums/tipoPeriodo.enum";
import { Servicio } from "src/servicio/servicio.entity";
import { genericAtributes } from "src/shared/abstract/generic-atributes";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Agendamiento extends genericAtributes{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    @IsEnum(TipoAgendamiento)
    tipoAgendamiento:TipoAgendamiento;

    @Column()
    fechaObjetivo:Date;

    @Column()
    @IsEnum(TipoPeriodo)
    tipoPeriodo:TipoPeriodo;

    @Column()
    periodo:number;

    @ManyToOne(() => Servicio, Servicio => Servicio.agendamientos)
    servicio: Servicio;
}