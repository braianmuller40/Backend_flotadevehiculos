import { forwardRef, Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuarios } from './usuarios.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[TypeOrmModule.forFeature([Usuarios]),forwardRef(()=>AuthModule)],
  providers: [UsuariosService],
  controllers: [UsuariosController],
  exports:[UsuariosService]
})
export class UsuariosModule {}
