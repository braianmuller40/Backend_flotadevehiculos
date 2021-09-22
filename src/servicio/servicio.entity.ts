import { Auto } from "src/auto/auto.entity";
import { genericAtributes } from "src/shared/abstract/generic-atributes";
import { TiposServicio } from "src/tipos-servicio/tipos-servicio.entity";
import { Usuario } from "src/usuario/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Servicio extends genericAtributes{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    valorServicio: number;

    @Column()
    fechaServicio: Date;

    @Column()
    kmInicial: number;

    @Column()
    kmFinal: number;

    @ManyToOne(() => Usuario, Usuario => Usuario.servicios)
    usuarioCreador: Usuario;

    @ManyToOne(() => TiposServicio, TiposServicios => TiposServicios.servicios)
    tipoServicio: TiposServicio;

    @ManyToOne(() => Auto, Auto => Auto.servicios)
    auto: Auto;
    
}