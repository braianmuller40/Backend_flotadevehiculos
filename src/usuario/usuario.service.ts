import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioDto } from './usuario.dto';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(Usuario)
        private readonly repository: Repository<Usuario>,
      ) {}
    
      async getAll() {
        return await this.repository.find();
      }
    
      async getById(id: number) {
        const post = await this.repository.findOne(id);
        if (!post) throw new NotFoundException('Service does not exist');
        return post;
      }
    
      async createOne(dto: UsuarioDto) {
        const usuario = this.repository.create(dto);
        return await this.repository.save(usuario);
      }
    
      async editOne(id: number, dto: UsuarioDto) {
        const usuario = await this.repository.findOne(id);
    
        if (!usuario) throw new NotFoundException('service does not exist');
    
        const editedUsuario = Object.assign(usuario, dto);
        return await this.repository.save(editedUsuario);
      }
    
      async deleteOne(id: number) {
        return await this.repository.delete(id);
      }

}
