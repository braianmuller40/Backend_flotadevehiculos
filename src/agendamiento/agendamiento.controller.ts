import { Controller } from '@nestjs/common';
import { GenericController } from 'src/shared/abstract/generic-controller';
import { AgendamientoDto } from './agendamiento.dto';
import { Agendamiento } from './agendamiento.entity';
import { AgendamientoService } from './agendamiento.service';

@Controller('agendamiento')
export class AgendamientoController extends GenericController<Agendamiento,AgendamientoDto>{

    constructor(readonly service:AgendamientoService){
        super(service);
    }

}
