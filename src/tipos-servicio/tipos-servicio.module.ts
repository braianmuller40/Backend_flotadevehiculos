import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposServicioController } from './tipos-servicio.controller';
import { TiposServicioService } from './tipos-servicio.service';
import { TiposServicio } from './tipos-servicio.entity';
import { AuthModule } from 'src/auth/auth.module';


@Module({
    imports:[TypeOrmModule.forFeature([TiposServicio]),forwardRef(()=>AuthModule)],
    providers: [TiposServicioService],
    controllers: [TiposServicioController]
})
export class TiposServiciosModule {}
