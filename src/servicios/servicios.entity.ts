import { Autos } from "src/autos/autos.entity";
import { Estado } from "src/enums/estado.enum";
import { genericAtributes } from "src/shared/abstract/generic-atributes";
import { TiposServicio } from "src/tipos-servicio/tipos-servicio.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Servicios extends genericAtributes{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fecha_inicio:Date;

    @Column({nullable:true})
    fecha_fin:Date;

    @Column()
    km_inicial:number;

    @Column({nullable:true})
    km_final:number;

    @Column({nullable:true})
    valor_servicio:number;

    @Column()
    estado:Estado;


    @ManyToOne(() => Usuarios, Usuarios => Usuarios.servicios)
    usuario: Usuarios;

    @ManyToOne(() => TiposServicio, TiposServicios => TiposServicios.servicios)
    tipo_servicio: TiposServicio;

    @ManyToOne(() => Autos, Autos => Autos.servicios)
    auto: Autos;

}