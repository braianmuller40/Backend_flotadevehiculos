import { Controller } from '@nestjs/common';
import { GenericController } from 'src/shared/abstract/generic-controller';
import { TiposServiciosService } from './tipos-servicios.service';
import { TiposServiciosDto } from './tipos_servicios.dto';
import { TiposServicios } from './tipos_servicios.entity';

@Controller('tipos-servicios')
export class TiposServiciosController extends GenericController<TiposServicios,TiposServiciosDto>{

    constructor(readonly service: TiposServiciosService) {
        super(service)
      }
}
