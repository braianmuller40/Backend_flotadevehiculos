import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsuarioDto } from './usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
    
    constructor(private readonly usuario: UsuarioService) {}

    @Get()
    async getMany() {
      const data = await this.usuario.getAll();
      return { data };
    }
  
    @Get(':id')
    async getById(@Param('id', ParseIntPipe) id: number) {
      const data = await this.usuario.getById(id);
      return { data };
    }
  
    @Post()
    async createPost(@Body() dto: UsuarioDto) {
      const data = await this.usuario.createOne(dto);
      return data;
    }
  
    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: UsuarioDto) {
      const data = await this.usuario.editOne(id, dto);
      return data;
    }
  
    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
      const data = await this.usuario.deleteOne(id);
      return data;
    }

  }
