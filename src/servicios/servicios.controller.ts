import { Controller } from '@nestjs/common';
import { GenericController } from 'src/shared/abstract/generic-controller';
import { ServiciosDto } from './servicios.dto';
import { Servicios } from './servicios.entity';
import { ServiciosService } from './servicios.service';

@Controller('servicios')
export class ServiciosController extends GenericController<Servicios,ServiciosDto>{

    constructor(readonly service:ServiciosService){
        super(service);
    }

}
