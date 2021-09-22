import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/shared/abstract/generic-service';
import { Repository } from 'typeorm';
import { UsuarioDto } from './usuario.dto';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService extends GenericService<Usuario,UsuarioDto> {

    constructor(
        @InjectRepository(Usuario)
         readonly repository: Repository<Usuario>,
      ) {
        super(repository)
      }

      async getAll() {
        return await this.repository.find();
      }

      async getUserByLogin(login: string): Promise<Usuario> {
        return await this.repository.findOne({ login });
    }


}
