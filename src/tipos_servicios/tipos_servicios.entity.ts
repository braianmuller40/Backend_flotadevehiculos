import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class TiposServicios{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;
}