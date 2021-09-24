import { Module } from '@nestjs/common';
import { AgendamientoService } from './agendamiento.service';
import { AgendamientoController } from './agendamiento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agendamiento } from './agendamiento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Agendamiento])],
  providers: [AgendamientoService],
  controllers: [AgendamientoController]
})
export class AgendamientoModule {}
