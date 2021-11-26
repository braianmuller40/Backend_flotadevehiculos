import { Column, Entity } from "typeorm";

@Entity()
export class genericAtributes{

    @Column()
    fecha_creacion: Date;

    @Column({nullable:true})
    fecha_alteracion: Date;

    @Column({nullable:true})
    descripcion: string;

}