import { Injectable, NotFoundException } from '@nestjs/common';
import { FindManyOptions, Repository } from 'typeorm';
import { PerPaginationDto } from './perPaginationDto.dto';

@Injectable()
export class GenericService<E,EDTO>{
  
  order:any = {id:"ASC"};

    constructor(readonly repository: Repository<E>) {}
    

    async getPPagination(dto:PerPaginationDto){
      const {skip, take} = dto;
      return await this.repository.find({
          order:this.order,
          skip:skip,
          take:take
        })
    }

    async countRep(){
       return await this.repository.count();
    }


    async getById(id: number) {
      const post = await this.repository.findOne(id);
      if (!post) throw new NotFoundException('Task does not exist');
      return post;
    }
  
    async createOne(dto: EDTO) {
      const task = this.repository.create(dto);
      return await this.repository.save(task);
    }
  
    async editOne(id: number, dto: EDTO) {
      const object = await this.repository.findOne(id);
  
      if (!object) throw new NotFoundException('Task does not exist');
  
      const editedObject = Object.assign(object, dto);
      return await this.repository.save(editedObject);
    }
  
    async deleteOne(id: number) {
      return await this.repository.delete(id);
    }

}