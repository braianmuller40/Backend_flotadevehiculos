import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ChangeUserPassDto } from './changeUserPass.dto';
import { UsuariosDto } from './usuarios.dto';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController{

    constructor(readonly service:UsuariosService){}

    @Post("changePassword")
    async changePass(@Body() dto: ChangeUserPassDto) {
      const data = await this.service.changePassword(dto);
      return data;
    }

   
    @UseGuards(AuthGuard('jwt'))
    @Get("count")
    async countRepository() {
      const data = await this.service.countRep();
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
    async deleteOne(@Param('id') id: number) {
      const data = await this.service.deleteOne(id);
      return data;
    }

    @Post()
    async createPost(@Body() dto: UsuariosDto) {
      const data = await this.service.createOne(dto);
      return data;
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: UsuariosDto) {
      const data = await this.service.editOne(id, dto);
      return data;
    }

}
