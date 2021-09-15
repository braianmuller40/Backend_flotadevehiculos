import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';



@Injectable()
export class GenericService<E,DTO>{
  
    constructor(readonly repository: Repository<E>) {}
    
   
    async getById(id: number) {
      const post = await this.repository.findOne(id);
      if (!post) throw new NotFoundException('Task does not exist');
      return post;
    }
  
    async createOne(dto: DTO) {
      const task = this.repository.create(dto);
      return await this.repository.save(task);
    }
  
    async editOne(id: number, dto: DTO) {
      const task = await this.repository.findOne(id);
  
      if (!task) throw new NotFoundException('Task does not exist');
  
      const editedTask = Object.assign(task, dto);
      return await this.repository.save(editedTask);
    }
  
    async deleteOne(id: number) {
      return await this.repository.delete(id);
    }

}