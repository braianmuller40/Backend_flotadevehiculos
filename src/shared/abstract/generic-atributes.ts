import { Column, Entity } from "typeorm";

@Entity()
export class genericAtributes{

    @Column()
    fecha_creacion: Date;

    @Column()
    fecha_alteracion: Date;

    @Column()
    descripcion: string;

}