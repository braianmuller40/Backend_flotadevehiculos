import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { GenericController } from 'src/shared/abstract/generic-controller';
import { ServicioDto } from './servicio.dto';
import { Servicio } from './servicio.entity';
import { ServicioService } from './servicio.service';

@Controller('servicio')
export class ServicioController extends GenericController<Servicio,ServicioDto> {
    
    constructor( readonly service: ServicioService) {
      super(service)
    }

}
