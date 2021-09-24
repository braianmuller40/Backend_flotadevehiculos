import { Agendamientos } from "src/agendamientos/agendamientos.entity";
import { Autos } from "src/autos/autos.entity";
import { genericAtributes } from "src/shared/abstract/generic-atributes";
import { TiposServicio } from "src/tipos-servicio/tipos-servicio.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Servicios extends genericAtributes{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Usuarios, Usuarios => Usuarios.servicios)
    usuario_creador: Usuarios;

    @ManyToOne(() => TiposServicio, TiposServicios => TiposServicios.servicio)
    tipo_servicio: TiposServicio;

    @ManyToOne(() => Autos, Autos => Autos.servicios)
    auto: Autos;
    
    @OneToOne(() => Agendamientos, Agendamientos => Agendamientos.servicio)
    agendamientos: Agendamientos;
}