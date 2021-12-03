import { HttpService } from '@nestjs/axios';
import { HttpServer, Injectable, NotFoundException } from '@nestjs/common';
import { Utils } from 'src/utils/utils';
import {
  Between,
  ILike,
  LessThanOrEqual,
  MoreThanOrEqual,
  Repository,
} from 'typeorm';
const fs = require('fs');

@Injectable()
export class GenericService<E, EDTO> {
  filter: { [key: string]: any } = {};
  order: any = { id: 'DESC' };

  constructor(readonly repository: Repository<E>) {}

  async getPFilter(query: any) {
    const { skip, take, obj, join } = query;
    return await this.repository.find({
      order: this.order,
      skip: skip,
      take: take,
      where: this.where(obj),
      join: {
        alias: 'A',
        leftJoinAndSelect: this.leftJoinAndSelect(join),
      },
    });
  }

  leftJoinAndSelect(obj: any) {
    let result: { [key: string]: any } = {};
    if (obj) {
      for (let i of obj) {
        result[i] = 'A.' + i;
      }
    }
    return result;
  }

  where(obj: any) {
    this.filter = JSON.parse(obj);
    let resultRelations=[];
    let resultWrites=[];
    let result=[];

    if(this.filter.relations){
      for(let b of this.filter.relations){
        resultRelations = this.setFilter('relation', Object.keys(b)[0].toString(), Object.values(b)[0]);
        Array.prototype.push.apply(result, resultRelations);
      }
    }
    resultWrites = this.setFilter('writes','',this.filter.writes);
    Array.prototype.push.apply(result, resultWrites);

  return result;
  }


  setFilter(state:string, relation:string ,item:any){
    let consultaFinal = new Array();

    if (item) {
      for (let t of item) {
        let consulta: { [key: string]: any } = {};

        for (let i of Object.keys(this.filter)) {
          if (this.filter[i].value) {
            consulta[i] = this.filter[i].value;
          }
          if (this.filter[i].from && this.filter[i].to) {
            consulta[i] = Between(this.filter[i].from, this.filter[i].to);
          }
          if (this.filter[i].from || this.filter[i].min) {
            this.filter[i].from
              ? (consulta[i] = MoreThanOrEqual(this.filter[i].from))
              : (consulta[i] = MoreThanOrEqual(this.filter[i].min));
          }
          if (this.filter[i].to || this.filter[i].max) {
            this.filter[i].to
              ? (consulta[i] = LessThanOrEqual(this.filter[i].to))
              : (consulta[i] = LessThanOrEqual(this.filter[i].max));
          }
          if (this.filter[i].writed) {
            if(state === 'writes'){
              consulta[t.toString()] = ILike('%' + this.filter[i].writed + '%');
            }
            if(state === 'relation'){
              let rel:{[key: string]:any} = {};
              rel[t.toString()] = ILike('%' + this.filter[i].writed + '%');;
              consulta[relation]=rel;
            }
          }
        }
        consultaFinal.push(consulta);
      }
    }
    return consultaFinal;
  }

  async countRep(query: any) {
    const { obj, join } = query;
    return await this.repository.count({
      where: this.where(obj),
      join: {
        alias: 'A',
        leftJoinAndSelect: this.leftJoinAndSelect(join),
      },
    });
  }

  async getById(id: number) {
    const post = await this.repository.findOne(id);
    if (!post) throw new NotFoundException('Task does not exist');
    return post;
  }

  async createOne(dto: EDTO) {
    dto = Utils.reformData(dto);
    Object.assign(dto,{fecha_creacion:Utils.getCurrentDate()});
    const task = this.repository.create(dto);
    return await this.repository.save(task);
  }

  async editOne(id: number, dto: EDTO) {
    dto = Utils.reformData(dto);
    Object.assign(dto,{fecha_alteracion:Utils.getCurrentDate()});
    const object = await this.repository.findOne(id);

    if (!object) throw new NotFoundException('Objeto  no existe');

    const editedObject = Object.assign(object, dto);
    return await this.repository.save(editedObject);
  }

  async deleteOne(id: number) {
    return await this.repository.delete(id);
  }
}
