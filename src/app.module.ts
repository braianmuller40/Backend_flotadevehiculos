import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { config } from 'process';
import { ConfigModule } from '@nestjs/config';
import { TiposServiciosModule } from './tipos-servicio/tipos-servicio.module';
import { AgendamientosModule } from './agendamientos/agendamientos.module';
import { ServiciosModule } from './servicios/servicios.module';
import { AutosModule } from './autos/autos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MovimientosModule } from './movimientos/movimientos.module';

@Module({
  imports: [
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
     MovimientosModule,
     AgendamientosModule,
     AuthModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
