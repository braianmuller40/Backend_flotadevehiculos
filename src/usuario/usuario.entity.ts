import { TipoUsuario } from "src/enums/tipoUsuario.enum";
import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    login: string;

    @Column()
    contrasena: string;

    @Column()
    tipoUsuario: TipoUsuario;

}