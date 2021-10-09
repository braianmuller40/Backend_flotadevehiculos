import { TipoUsuario } from "src/enums/tipo_usuario.enum";
import * as bcrypt from 'bcrypt';
import { BeforeInsert, BeforeUpdate, Column, Double, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { classToPlain, Exclude } from "class-transformer";
import { Servicios } from "src/servicios/servicios.entity";
import { Agendamientos } from "src/agendamientos/agendamientos.entity";

@Entity()
export class Usuarios{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    login: string;

    @Column()
    @Exclude({ toPlainOnly: true})
    password: string;

    @Column()
    tipo_usuario: TipoUsuario;

    @OneToMany(() => Servicios, Servicios => Servicios.usuario)
    servicios: Servicios[];

    @OneToMany(() => Agendamientos,Agendamientos => Agendamientos.usuario)
    agendamientos:Agendamientos[];

    toJSON(){
      return classToPlain(this);
    }

    //Funciones de autenticacion
    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
      if(!this.password){
        this.password = this.login;
      }
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
    }

    async validatePassword(password: string){
        return await bcrypt.compareSync(password, this.password);
      }


}