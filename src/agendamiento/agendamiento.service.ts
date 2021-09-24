import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/shared/abstract/generic-service';
import { Repository } from 'typeorm';
import { AgendamientoDto } from './agendamiento.dto';
import { Agendamiento } from './agendamiento.entity';

@Injectable()
export class AgendamientoService extends GenericService<Agendamiento,AgendamientoDto>{

    constructor(
        @InjectRepository(Agendamiento)
        readonly repository:Repository<Agendamiento>,
    ){
        super(repository);
    }


    async getAll(){
        await this.repository.find();
    }

}
