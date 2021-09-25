import { Estado } from "src/enums/estado.enum";
import { Servicios } from "src/servicios/servicios.entity";
import { genericAtributes } from "src/shared/abstract/generic-atributes";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Movimientos extends genericAtributes{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    fecha_inicio:Date;

    @Column()
    fecha_fin:Date;

    @Column()
    km_inicial:number;

    @Column()
    km_final:number;

    @Column()
    valor_servicio:number;

    @Column()
    estado:Estado;

    @ManyToOne(() => Servicios,Servicios => Servicios.movimientos)
    servicio:Servicios;
    
}