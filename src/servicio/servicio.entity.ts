import { TipoUsuario} from "src/enums/tipoUsuario.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Servicio{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuario: TipoUsuario;

    @Column()
    tipoServicio: string;

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