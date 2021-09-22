import { Column, Entity } from "typeorm";

@Entity()
export class genericAtributes{

    @Column()
    fechaCreacion: Date;

    @Column()
    fechaAlteracion: Date;

    @Column()
    descripcion: string;

}