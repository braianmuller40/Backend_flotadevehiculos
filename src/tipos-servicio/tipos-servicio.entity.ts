import { Servicios } from "src/servicios/servicios.entity";
import { genericAtributes } from "src/shared/abstract/generic-atributes";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class TiposServicio extends genericAtributes{
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Servicios, Servicios => Servicios.tipo_servicio)
    servicio: Servicios[];
}