import {  IsEnum } from "class-validator";
import { TipoAgendamiento } from "src/enums/tipo_agendamiento.enum";
import { TipoPeriodo } from "src/enums/tipo_periodo.enum";
import { Servicios } from "src/servicios/servicios.entity";
import { genericAtributes } from "src/shared/abstract/generic-atributes";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Agendamientos extends genericAtributes{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    @IsEnum(TipoAgendamiento)
    tipo_agendamiento:TipoAgendamiento;

    @Column({nullable:true})
    fecha_objetivo:Date;

    @Column({nullable:true})
    @IsEnum(TipoPeriodo)
    tipo_periodo:TipoPeriodo;

    @Column({nullable:true})
    periodo:number;

    @OneToOne(() => Servicios, Servicios => Servicios.agendamientos)
    @JoinColumn()
    servicio: Servicios;
}