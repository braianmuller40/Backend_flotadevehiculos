import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/shared/abstract/generic-service';
import { Repository } from 'typeorm';
import { ServicioDto } from './servicio.dto';
import { Servicio } from './servicio.entity';

@Injectable()
export class ServicioService extends GenericService<Servicio,ServicioDto>{

    constructor(
        @InjectRepository(Servicio)
         readonly repository: Repository<Servicio>,
      ) {
        super(repository)
      }

      async getAll() {
        return await this.repository.find();
      }

}
