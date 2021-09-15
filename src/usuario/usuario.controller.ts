import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { GenericController } from 'src/shared/abstract/generic-controller';
import { UsuarioDto } from './usuario.dto';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController extends GenericController<Usuario,UsuarioDto>{
    
    constructor(readonly service: UsuarioService) {
      super(service)
    }

  }
