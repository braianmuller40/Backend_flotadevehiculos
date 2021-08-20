import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServicioDto } from './servicio.dto';
import { Servicio } from './servicio.entity';

@Injectable()
export class ServicioService {

    constructor(
        @InjectRepository(Servicio)
        private readonly repository: Repository<Servicio>,
      ) {}
    
      async getAll() {
        return await this.repository.find();
      }
    
      async getById(id: number) {
        const post = await this.repository.findOne(id);
        if (!post) throw new NotFoundException('Service does not exist');
        return post;
      }
    
      async createOne(dto: ServicioDto) {
        const servicio = this.repository.create(dto);
        return await this.repository.save(servicio);
      }
    
      async editOne(id: number, dto: ServicioDto) {
        const servicio = await this.repository.findOne(id);
    
        if (!servicio) throw new NotFoundException('service does not exist');
    
        const editedServicio = Object.assign(servicio, dto);
        return await this.repository.save(editedServicio);
      }
    
      async deleteOne(id: number) {
        return await this.repository.delete(id);
      }

}
