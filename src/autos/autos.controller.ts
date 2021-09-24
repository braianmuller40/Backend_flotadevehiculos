import { Controller } from '@nestjs/common';
import { GenericController } from 'src/shared/abstract/generic-controller';
import { AutosDto } from './autos.dto';
import { Autos } from './autos.entity';
import { AutosService } from './autos.service';

@Controller('autos')
export class AutosController extends GenericController<Autos,AutosDto>{

    constructor(readonly service: AutosService){
        super(service);
    }

}
