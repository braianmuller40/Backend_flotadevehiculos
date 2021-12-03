import { Body, Controller, Post, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDTO } from "./login.dto";


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDTO: LoginDTO){
    const { login, password } = loginDTO;
    const valid = await this.authService.validateUser(login, password);
    if (!valid) {
      throw new UnauthorizedException();
    }
    return await this.authService.generateAccessToken(login);
  }


  @Post('verifyToken')
  async veriToken(@Body() token: any){
     return await this.authService.verifyToken(token);
  }


}