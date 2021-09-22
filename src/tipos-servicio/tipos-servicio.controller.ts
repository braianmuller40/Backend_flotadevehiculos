import { Controller } from '@nestjs/common';
import { GenericController } from 'src/shared/abstract/generic-controller';
import { TiposServicioService } from './tipos-servicio.service';
import { TiposServicioDto } from './tipos-servicio.dto';
import { TiposServicio } from './tipos-servicio.entity';


@Controller('tipos-servicio')
export class TiposServicioController extends GenericController<TiposServicio,TiposServicioDto>{

    constructor(readonly service: TiposServicioService) {
        super(service)
      }
}
