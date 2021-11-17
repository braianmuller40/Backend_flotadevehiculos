import { ConsoleLogger, Injectable, NotFoundException } from '@nestjs/common';
import { Equals } from 'class-validator';
import { Between, Equal, FindManyOptions,ILike,LessThanOrEqual,MoreThanOrEqual, Repository } from 'typeorm';
import { GenericEnumAutos } from './genericEnumAutos.enum';

@Injectable()
export class GenericService<E,EDTO>{
  
  filter:{[key:string]:any}={}; 
  order:any = {id:"ASC"};

    constructor(readonly repository: Repository<E>) {}
    

    async getPFilter(query: any){
      const {skip, take, obj} = query;
  
      return await this.repository.find({
          order:this.order,
          skip:skip,
          take:take,
          where:this.where(obj)
        })
    }

    where(obj:any){
      this.filter = JSON.parse(obj);
      let consultaFinal = new Array(); 

      if(this.filter.strings){
        for(let t of Object.keys(this.filter.strings)){
          let consulta:{[key:string]:any}={};
  
          for(let i of Object.keys(this.filter)){
            if(this.filter[i].value){
              consulta[i]=this.filter[i].value;
            }
            if(this.filter[i].from && this.filter[i].to){
              consulta[i]=Between(this.filter[i].from,this.filter[i].to);
            }
            if(this.filter[i].from || this.filter[i].min){
              this.filter[i].from? consulta[i]=MoreThanOrEqual(this.filter[i].from):
              consulta[i]=MoreThanOrEqual(this.filter[i].min);
            }
            if(this.filter[i].to || this.filter[i].max){
              this.filter[i].to? consulta[i]=LessThanOrEqual(this.filter[i].to):
              consulta[i]=LessThanOrEqual(this.filter[i].max);
            }
            if(this.filter[i].writed){
              consulta[t.toString()]=ILike("%"+this.filter[i].writed+"%");
            }
          }
          consultaFinal.push(consulta);
        }
      }
      return consultaFinal;
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
  
      if (!object) throw new NotFoundException('Objeto  no existe');
  
      const editedObject = Object.assign(object, dto);
      return await this.repository.save(editedObject);
    }
  
    async deleteOne(id: number) {
      return await this.repository.delete(id);
    }


}