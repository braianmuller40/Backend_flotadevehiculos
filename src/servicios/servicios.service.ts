import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { GenericService } from 'src/shared/abstract/generic-service';
import { Repository } from 'typeorm';
import { ServiciosDto } from './servicios.dto';
import { Servicios } from './servicios.entity';

@Injectable()
export class ServiciosService extends GenericService<Servicios,ServiciosDto> {

    constructor(
        @InjectRepository(Servicios)
        readonly repository:Repository<Servicios>
    ){
        super(repository);
    }

    async getAll(){
        return await this.repository.find();
    }
}
