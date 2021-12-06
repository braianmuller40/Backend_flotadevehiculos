import { Injectable, OnModuleInit } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoUsuario } from './enums/tipo_usuario.enum';
import { Usuarios } from './usuarios/usuarios.entity';
import { UsuariosService } from './usuarios/usuarios.service';
import { Utils } from './utils/utils';

@Injectable()
export class AppService implements OnModuleInit{
  
constructor(@InjectRepository(Usuarios) readonly userRep:Repository<Usuarios>){

}


  onModuleInit(){
    this.setRoot();
  }

    async setRoot(){
      if(!await this.findAdmin()){
        let root = this.userRep.create(
          {
            fecha_creacion:Utils.getCurrentDate(),
            login:"root",
            nombre:"ROOT",
            tipo_usuario:TipoUsuario.ADMINISTRADOR
          }
        );
        await this.userRep.save(root);
      }
    }

    async findAdmin(){
      return (await this.userRep.find({where:{tipo_usuario:"ADMINISTRADOR"}})).length !== 0? true:false;
    }
}
