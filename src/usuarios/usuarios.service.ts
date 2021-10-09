import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/shared/abstract/generic-service';
import { Repository } from 'typeorm';
import { ChangeUserPassDto } from './changeUserPass.dto';
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

    async changePassword(dto:ChangeUserPassDto){
        const user = await this.repository.findOne({login:dto.login});
        if(user && await user.validatePassword(dto.password)){
            const editUser = Object.assign(user,{password:dto.newPassword});
            return await this.repository.save(editUser);
        }else{
            throw new NotFoundException('User dont exist or password incorrect');
        }
    }

}
