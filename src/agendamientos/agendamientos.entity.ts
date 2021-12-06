import {  IsEnum } from "class-validator";
import { Autos } from "src/autos/autos.entity";
import { TipoAgendamiento } from "src/enums/tipo_agendamiento.enum";
import { TipoPeriodo } from "src/enums/tipo_periodo.enum";
import { genericAtributes } from "src/shared/abstract/generic-atributes";
import { TiposServicio } from "src/tipos-servicio/tipos-servicio.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
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

    @ManyToOne(() => Autos,Autos => Autos.agendamientos)
    auto:Autos;

    @ManyToOne(() => Usuarios,Usuarios => Usuarios.agendamientos)
    usuario:Usuarios;

    @ManyToOne(() => TiposServicio,TiposServicio => TiposServicio.agendamientos)
    tipo_servicio:TiposServicio;
}