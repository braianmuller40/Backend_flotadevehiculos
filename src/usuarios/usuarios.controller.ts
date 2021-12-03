import { Body, Controller, Delete, Get, Header, Param, ParseIntPipe, Post, Put, Query, UseGuards, Headers } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { ChangeUserPassDto } from './changeUserPass.dto';
import { UsuariosDto } from './usuarios.dto';
import { Usuarios } from './usuarios.entity';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController{
    token:string;
    admin:boolean=false;

    constructor(readonly service:UsuariosService, readonly authServ:AuthService){}

    @UseGuards(AuthGuard('jwt'))
    @Post("changePassword")
    async changePass(@Body() dto: ChangeUserPassDto) {
      const data = await this.service.changePassword(dto);
      return data;
    }

    @Post("verifyUser")
    async getUserByLogin(@Body() user: Usuarios) {
      const data = await this.service.getUserByLogin(user.login);
      return  data ;
    }

    @UseGuards(AuthGuard('jwt'))
    @Get("count")
    async countRepository(@Query() query: any) {
      const data = await this.service.countRep(query);
      return  data ;
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getMany() {
      const data = await this.service.getAll();
      return  data ;
    }

    @UseGuards(AuthGuard('jwt'))
    @Get("getPerFilter")
    async getPerFilter(@Query() query: any) {
      const data = await this.service.getPFilter(query);
      return data;
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async getById(@Param('id', ParseIntPipe) id: number) {
      const data = await this.service.getById(id);
      return  data ;
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async deleteOne(@Headers() headers:any ,@Param('id') id: number) {
      const data = await this.getAdminByHeader(headers)? await this.service.deleteOne(id):{};
      return data;
    }

    @Post()
    async createPost(@Headers() headers:any ,@Body() dto: UsuariosDto) {
      const data = await this.getAdminByHeader(headers)? await this.service.createOne(dto):{};
      return data;
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async editOne(@Headers() headers:any ,@Param('id') id: number, @Body() dto: UsuariosDto) {
      const data = await this.getAdminByHeader(headers)? await this.service.editOne(id, dto):{};
      return data;
    }



    async getAdminByHeader(headers:any){
      let userTok = await this.authServ.verifyToken(this.getToken(headers));
      return await userTok.role == 'ADMINISTRADOR'? true:false;
    }

    getToken(headers:any){
      let token:{[key:string]:any}={};
      token['access_token']= headers.authorization.split(' ')[1];
      return token;
    }

}
