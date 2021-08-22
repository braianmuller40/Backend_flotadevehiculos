import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AutoModule } from './auto/auto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicioModule } from './servicio/servicio.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
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
     UsuarioModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
