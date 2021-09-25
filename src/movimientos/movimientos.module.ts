import { Module } from '@nestjs/common';
import { MovimientosService } from './movimientos.service';
import { MovimientosController } from './movimientos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movimientos } from './movimientos.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Movimientos])],
  providers: [MovimientosService],
  controllers: [MovimientosController]
})
export class MovimientosModule {}
