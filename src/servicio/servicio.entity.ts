import { TipoServicio } from "src/enums/tipoServicio.enum";
import { Usuario } from "src/enums/tipoUsuario.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Servicio{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuario: Usuario;

    @Column()
    tipoServicio: TipoServicio;

    @Column()
    valorServicio: number;

    @Column()
    fechaServicio: Date;

    @Column()
    kmInicial: number;

    @Column()
    kmFinal: number;

    @Column()
    descripcion: string;

    
}