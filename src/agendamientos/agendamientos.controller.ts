import { Controller } from '@nestjs/common';
import { GenericController } from 'src/shared/abstract/generic-controller';
import { AgendamientosDto } from './agendamientos.dto';
import { Agendamientos } from './agendamientos.entity';
import { AgendamientosService } from './agendamientos.service';

@Controller('agendamientos')
export class AgendamientosController extends GenericController<Agendamientos,AgendamientosDto> {

    constructor(readonly service:AgendamientosService){
        super(service);
    }
}
