import { forwardRef, Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TiposServiciosModule } from './tipos-servicio/tipos-servicio.module';
import { AgendamientosModule } from './agendamientos/agendamientos.module';
import { ServiciosModule } from './servicios/servicios.module';
import { AutosModule } from './autos/autos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ApiChargeModule } from './apiCharge/api-charge.module';
import { Usuarios } from './usuarios/usuarios.entity';
import { UsuariosService } from './usuarios/usuarios.service';
import { ReporteModule } from './reporte/reporte.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuarios]),
    ConfigModule.forRoot({
      envFilePath:'.env'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '19961996',
      database: 'flota_vehiculos',
      entities: [__dirname + './**/**/*entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      logger: 'file',
    }),
     AutosModule,
     ServiciosModule,
     UsuariosModule,
     TiposServiciosModule,
     AgendamientosModule,
     AuthModule,
     ApiChargeModule,
     ReporteModule
    ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
