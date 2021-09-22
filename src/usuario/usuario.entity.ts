import { TipoUsuario } from "src/enums/tipoUsuario.enum";
import * as bcrypt from 'bcrypt';
import { BeforeInsert, Column, Double, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Servicio } from "src/servicio/servicio.entity";

@Entity()
export class Usuario{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    login: string;

    @Column()
    password: string;

    @Column()
    tipoUsuario: TipoUsuario;

    @OneToMany(() => Servicio, Servicio => Servicio.usuarioCreador)
    servicios: Servicio[];
  

    //Funciones de autenticacion
    @BeforeInsert()
    async hashPassword() {
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
    }

    async validatePassword(password: string){
        return await bcrypt.compareSync(password, this.password);
      }


}