import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/shared/abstract/generic-service';
import { Repository } from 'typeorm';
import { AutoDto } from './auto.dto';
import { Auto } from './auto.entity';


@Injectable()
export class AutoService extends GenericService<Auto,AutoDto>{
  
    constructor(
        @InjectRepository(Auto)
        readonly repository: Repository<Auto>,
      ) {
      super(repository);
    }

    async getAll() {
      return await this.repository.find({join:{alias:'task', leftJoinAndSelect:{subTasks:'task.subTasks'}}});
    }
    
}
