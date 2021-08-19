import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AutoModule } from './auto/auto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutoService } from './auto/auto.service';

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
     AutoModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
