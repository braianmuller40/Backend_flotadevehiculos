import { Controller } from '@nestjs/common';
import { GenericController } from 'src/shared/abstract/generic-controller';
import { MovimientosDto } from './movimientos.dto';
import { Movimientos } from './movimientos.entity';
import { MovimientosService } from './movimientos.service';

@Controller('movimientos')
export class MovimientosController extends GenericController<Movimientos,MovimientosDto>{

    constructor(readonly service:MovimientosService){
        super(service);
    }

}
