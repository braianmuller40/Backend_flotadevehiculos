import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AutoModule } from './auto/auto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicioModule } from './servicio/servicio.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { config } from 'process';
import { ConfigModule } from '@nestjs/config';
import { TiposServiciosModule } from './tipos-servicio/tipos-servicio.module';
import { AgendamientoModule } from './agendamiento/agendamiento.module';

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
     AutoModule,
     ServicioModule,
     UsuarioModule,
     TiposServiciosModule,
     AgendamientoModule,
     AuthModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
