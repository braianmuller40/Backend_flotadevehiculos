import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { ApiChargeService } from './api-charge.service';


@Module({
    imports:[
        TypeOrmModule.forFeature([Usuarios]),
        HttpModule,
        ScheduleModule.forRoot()
    ],
    providers: [ApiChargeService],
})
export class ApiChargeModule {}
