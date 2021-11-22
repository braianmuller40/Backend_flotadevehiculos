import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AgendamientosDto } from './agendamientos.dto';
import { AgendamientosService } from './agendamientos.service';

@Controller('agendamientos')
export class AgendamientosController{

    constructor(readonly service:AgendamientosService){}

    
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
    async deleteOne(@Param('id') id: number) {
      const data = await this.service.deleteOne(id);
      return data;
    }

    @Post()
    async createPost(@Body() dto: AgendamientosDto) {
      const data = await this.service.createOne(dto);
      return data;
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: AgendamientosDto) {
      const data = await this.service.editOne(id, dto);
      return data;
    }
}
