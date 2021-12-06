import { forwardRef, Module } from '@nestjs/common';
import { ReporteService } from './reporte.service';
import { ReporteController } from './reporte.controller';
import { AutosService } from 'src/autos/autos.service';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { AgendamientosService } from 'src/agendamientos/agendamientos.service';
import { TiposServicioService } from 'src/tipos-servicio/tipos-servicio.service';
import { ServiciosService } from 'src/servicios/servicios.service';
import { ServiciosModule } from 'src/servicios/servicios.module';

@Module({
  imports:[
    forwardRef(()=>ServiciosModule),
  ],
  providers: [ReporteService],
  controllers: [ReporteController]
})
export class ReporteModule {}
