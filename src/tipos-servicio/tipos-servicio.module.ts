import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposServicioController } from './tipos-servicio.controller';
import { TiposServicioService } from './tipos-servicio.service';
import { TiposServicio } from './tipos-servicio.entity';


@Module({
    imports:[TypeOrmModule.forFeature([TiposServicio])],
    providers: [TiposServicioService],
    controllers: [TiposServicioController]
})
export class TiposServiciosModule {}
