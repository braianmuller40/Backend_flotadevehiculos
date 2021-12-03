import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards, Headers } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { AutosDto } from './autos.dto';
import { AutosService } from './autos.service';

@Controller('autos')
export class AutosController{

    constructor(readonly service: AutosService, private authServ:AuthService){}

    
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
    async createPost(@Headers() headers:any ,@Body() dto: AutosDto) {
      const data = await this.getAdminByHeader(headers)? await this.service.createOne(dto):{};
      return data;
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async editOne(@Headers() headers:any ,@Param('id') id: number, @Body() dto: AutosDto) {
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
