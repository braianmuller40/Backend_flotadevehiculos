import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/shared/abstract/generic-service';
import { Repository } from 'typeorm';
import { UsuariosDto } from './usuarios.dto';
import { Usuarios } from './usuarios.entity';

@Injectable()
export class UsuariosService extends GenericService<Usuarios,UsuariosDto>{

    constructor(
        @InjectRepository(Usuarios)
        readonly repository:Repository<Usuarios>
    ){
        super(repository);
    }

    async getAll(){
        return await this.repository.find();
    }

    async getUserByLogin(login:string){
        return await this.repository.findOne({login});
    }

}
