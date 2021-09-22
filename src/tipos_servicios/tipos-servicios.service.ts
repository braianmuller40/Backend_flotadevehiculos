import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/shared/abstract/generic-service';
import { Repository } from 'typeorm';
import { TiposServiciosDto } from './tipos_servicios.dto';
import { TiposServicios } from './tipos_servicios.entity';

@Injectable()
export class TiposServiciosService extends GenericService<TiposServicios,TiposServiciosDto>{

    constructor(
        @InjectRepository(TiposServicios)
         readonly repository: Repository<TiposServicios>,
      ) {
        super(repository)
      }

      async getAll() {
        return await this.repository.find();
      }

}
