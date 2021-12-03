import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsuariosService } from "src/usuarios/usuarios.service";
import { JWTPayload } from "./jwt.payload";


@Injectable()
export class AuthService {

  constructor(
    private usuarioService: UsuariosService,
    private jwtService: JwtService
  ) {}

  async validateUser(login: string, password: string){
    const user = await this.usuarioService.getUserByLogin(login);
    if(!user){
      return false;
    }
    return await user.validatePassword(password);
  }

  async generateAccessToken(login: string) {
    const user = await this.usuarioService.getUserByLogin(login)
    const payload:JWTPayload = { login: user.login, role:user.tipo_usuario };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async verifyToken(token:any){
    return await this.jwtService.verify(token.access_token,{secret:process.env.SECRET_KEY});
  }
}