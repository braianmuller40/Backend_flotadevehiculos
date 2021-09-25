import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/shared/abstract/generic-service';
import { Repository } from 'typeorm';
import { MovimientosDto } from './movimientos.dto';
import { Movimientos } from './movimientos.entity';

@Injectable()
export class MovimientosService extends GenericService<Movimientos,MovimientosDto>{
    constructor(
        @InjectRepository(Movimientos)
        readonly repository:Repository<Movimientos>
    ){
        super(repository);
    }

    async getAll(){
        return await this.repository.find();
    }
}
