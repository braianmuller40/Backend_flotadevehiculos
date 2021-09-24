import { Controller } from '@nestjs/common';
import { GenericController } from 'src/shared/abstract/generic-controller';
import { UsuariosDto } from './usuarios.dto';
import { Usuarios } from './usuarios.entity';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController extends GenericController<Usuarios,UsuariosDto>{

    constructor(readonly service:UsuariosService){
        super(service);
    }

}
