import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { GenericService } from 'src/shared/abstract/generic-service';
import { Repository } from 'typeorm';
import { AgendamientosDto } from './agendamientos.dto';
import { Agendamientos } from './agendamientos.entity';

@Injectable()
export class AgendamientosService extends GenericService<Agendamientos,AgendamientosDto>{
    constructor(
        @InjectRepository(Agendamientos) 
        readonly repository: Repository<Agendamientos>,
        ){
        super(repository);
    }

    async getAll(){
        return await this.repository.find();
    }
}
