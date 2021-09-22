import { Servicio } from "src/servicio/servicio.entity";
import { genericAtributes } from "src/shared/abstract/generic-atributes";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class TiposServicio extends genericAtributes{
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Servicio, Servicio => Servicio.tipoServicio)
    servicios: Servicio[];
}