import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';


@Module({
    imports: [
      ConfigModule.forRoot(),
      UsuarioModule,
      PassportModule,
      JwtModule.register({
        secret: process.env.SECRET_KEY,
        signOptions: { expiresIn: '3600s' },
      }),
    ],
    controllers: [AuthController],
    providers: [AuthService,JwtStrategy],
    exports: [AuthService],
  })
export class AuthModule {}
