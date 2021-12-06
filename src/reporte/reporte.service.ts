import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { Estado } from 'src/enums/estado.enum';
import { ServiciosService } from 'src/servicios/servicios.service';
import { Utils } from 'src/utils/utils';
import { Between } from 'typeorm';

@Injectable()
export class ReporteService{

    enter={
        campo:"valor_servicio",
        fecha:"M/Y",
    }

    modelServicio={
        estado:{value:"FINALIZADO"},
        fecha_alteracion:{from:Utils.getDate(null,null,null), to:Utils.getDate(null,null,null)},
        writes:['descripcion']
     }

    constructor(private serviciosServ:ServiciosService){}



    getReporte(enter:any){
        const { obj } = enter;
        let ent = JSON.parse(obj)
        return this.reformEnter(ent);
    }
    

    reformEnter(enter:any){
        if(enter['campo'] == "valor_servicio"){
            let target = this.modelServicio;
            if(enter['fecha'] == "Y"){
                Object.assign(target,{fecha_alteracion:{from:Utils.getDate(1,1,null), to:Utils.getDate(30,12,null)}});
                return this.SgetValorPerYear(target);
            }
            if(enter['fecha'] == "M/Y"){
                Object.assign(target,{fecha_alteracion:{from:Utils.getDate(1,1,null), to:Utils.getDate(30,12,null)}});
                return this.SgetValorPerMonthForYear(target);
            }
        }
    }


     async SgetValorPerYear(target:any){
        return await this.serviciosServ.getPFilter({obj:JSON.stringify(target)}).then(result =>{
            let valor:number=0;
            for(let i of result){
                i.valor_servicio? valor = valor + i.valor_servicio:false;    
            }
            return valor;
        });
     } 

     async SgetValorPerMonthForYear(target:any){
        return await this.serviciosServ.getPFilter({obj:JSON.stringify(target)}).then(result =>{
            let res: { [key: string]: any } = {};
            for(let i of result){
              if(i.estado == Estado.FINALIZADO && i.valor_servicio){
                  let m:number = res[(i.fecha_alteracion.getMonth()+1).toString()] ? res[(i.fecha_alteracion.getMonth()+1).toString()] : 0;
                  res[(i.fecha_alteracion.getMonth()+1).toString()] = i.valor_servicio + m;
              }  
            }
            return res;
        });
     } 





}
