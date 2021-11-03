import { Column, Entity } from "typeorm";

@Entity()
export class genericAtributes{

    @Column({nullable:true})
    fecha_creacion: Date;

    @Column({nullable:true})
    fecha_alteracion: Date;

    @Column({nullable:true})
    descripcion: string;

}