import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UsuarioService } from "src/usuario/usuario.service";
import { JWTPayload } from "./jwt.payload";



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usuarioService: UsuarioService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET_KEY,
    });
  }

  async validate(payload: JWTPayload){
    const user = await this.usuarioService.getUserByLogin(payload.login);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }

  
}