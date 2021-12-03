import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { error } from 'console';
import { AuthService } from 'src/auth/auth.service';
import { GenericService } from 'src/shared/abstract/generic-service';
import { Utils } from 'src/utils/utils';
import { ILike, Repository } from 'typeorm';
import { ChangeUserPassDto } from './changeUserPass.dto';
import { UsuariosDto } from './usuarios.dto';
import { Usuarios } from './usuarios.entity';

@Injectable()
export class UsuariosService extends GenericService<Usuarios,UsuariosDto>{

    constructor(
        @InjectRepository(Usuarios)
        readonly repository:Repository<Usuarios>,
    ){
        super(repository);
    }

    async getAll(){
        return await this.repository.find();
    }

    async getUserByLogin(login:string){
        return await this.repository.findOne({where:{login:ILike(login)}});
    }

    async changePassword(dto:ChangeUserPassDto){
        const user = await this.repository.findOne({login:dto.login});
        if(user && await user.validatePassword(dto.password)){
            const editUser = Object.assign(user,{password:dto.new_password});
            Object.assign(editUser,{fecha_alteracion:Utils.getCurrentDate()});
            return await this.repository.save(editUser);
        }else{
            return error;
        }
    }

}
