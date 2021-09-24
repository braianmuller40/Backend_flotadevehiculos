import {  IsEnum } from "class-validator";
import { TipoAgendamiento } from "src/enums/tipoAgendamiento.enum";
import { TipoPeriodo } from "src/enums/tipoPeriodo.enum";
import { Servicio } from "src/servicio/servicio.entity";
import { genericAtributes } from "src/shared/abstract/generic-atributes";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Agendamiento extends genericAtributes{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    @IsEnum(TipoAgendamiento)
    tipoAgendamiento:TipoAgendamiento;

    @Column({nullable:true})
    fechaObjetivo:Date;

    @Column({nullable:true})
    @IsEnum(TipoPeriodo)
    tipoPeriodo:TipoPeriodo;

    @Column({nullable:true})
    periodo:number;

    @OneToOne(() => Servicio, Servicio => Servicio.agendamientos)
    @JoinColumn()
    servicio: Servicio;
}