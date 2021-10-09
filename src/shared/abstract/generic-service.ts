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
      const object = await this.repository.findOne(id);
  
      if (!object) throw new NotFoundException('Task does not exist');
  
      const editedObject = Object.assign(object, dto);
      return await this.repository.save(editedObject);
    }
  
    async deleteOne(id: number) {
      return await this.repository.delete(id);
    }

}