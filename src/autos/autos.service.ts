import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/shared/abstract/generic-service';
import { Repository } from 'typeorm';
import { AutosDto } from './autos.dto';
import { Autos } from './autos.entity';

@Injectable()
export class AutosService extends GenericService<Autos,AutosDto>{

    constructor(
        @InjectRepository(Autos)
        readonly repository: Repository<Autos>
    ){
        super(repository);
    }

    async getAll(){
        return await this.repository.find();
    }

}
