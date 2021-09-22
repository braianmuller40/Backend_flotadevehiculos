import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposServiciosService } from './tipos-servicios.service';
import { TiposServicios } from './tipos_servicios.entity';
import { TiposServiciosController } from './tipos-servicios.controller';

@Module({
    imports:[TypeOrmModule.forFeature([TiposServicios])],
    providers: [TiposServiciosService],
    controllers: [TiposServiciosController],
    exports:[TiposServiciosService]
})
export class TiposServiciosModule {}
