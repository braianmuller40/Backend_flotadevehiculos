import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Auto{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    chapa: string;

    @Column()
    chassis: string;

    @Column()
    fabricante: string;

    @Column()
    modelo: string;

    @Column()
    kilometraje: number;

    @Column()
    anoModelo: number;

    @Column()
    anoFabricacion: number;

    @Column()
    descripcion: string;
}