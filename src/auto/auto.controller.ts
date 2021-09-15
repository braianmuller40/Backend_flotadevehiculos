import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { GenericController } from 'src/shared/abstract/generic-controller';
import { AutoDto } from './auto.dto';
import { Auto } from './auto.entity';
import { AutoService } from './auto.service';

@Controller('auto')
export class AutoController extends GenericController<Auto,AutoDto>{

    constructor( readonly service: AutoService) {
      super(service)
    }
}
