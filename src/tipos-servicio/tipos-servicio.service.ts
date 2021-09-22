import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/shared/abstract/generic-service';
import { Repository } from 'typeorm';
import { TiposServicioDto } from './tipos-servicio.dto';
import { TiposServicio } from './tipos-servicio.entity';

@Injectable()
export class TiposServicioService extends GenericService<TiposServicio,TiposServicioDto>{

    constructor(
        @InjectRepository(TiposServicio)
         readonly repository: Repository<TiposServicio>,
      ) {
        super(repository)
      }

      async getAll() {
        return await this.repository.find();
      }

}
