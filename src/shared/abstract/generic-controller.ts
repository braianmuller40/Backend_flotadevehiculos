import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Repository } from "typeorm";


@Controller()
export class GenericController<E,DTO> {
    
    constructor(readonly service:any) {}

    @Get()
    async getMany() {
      const data = await this.service.getAll();
      return { data };
    }
  
    @Get(':id')
    async getById(@Param('id', ParseIntPipe) id: number) {
      const data = await this.service.getById(id);
      return { data };
    }
  
    @Post()
    async createPost(@Body() dto: DTO) {
      const data = await this.service.createOne(dto);
      return data;
    }
  
    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: DTO) {
      const data = await this.service.editOne(id, dto);
      return data;
    }
  
    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
      const data = await this.service.deleteOne(id);
      return data;
    }

  }