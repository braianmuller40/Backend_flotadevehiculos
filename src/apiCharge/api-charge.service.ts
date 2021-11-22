import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { Interval } from "@nestjs/schedule";
import { InjectRepository } from "@nestjs/typeorm";
import { AxiosResponse } from "axios";
import { Observable } from "rxjs";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Utils } from "src/utils/utils";
import { Repository, ILike } from "typeorm";


const fs = require('fs');


@Injectable()
export class ApiChargeService {

    api = Utils.ipK();

    constructor( @InjectRepository(Usuarios) readonly userRep:Repository<Usuarios>,private httpServ:HttpService){}


    @Interval(200000)
    handleInterval() {
        this.getItems();
    }


    getItems(){
        this.findToken().subscribe({
            next:(result:any) => this.getByToken(result.data.token),
            error:(err:any) => Utils.writeInline("No se pudo authenticar con el API"),
        });
    }

    getByToken(token:any){
        this.httpServ.get(this.api+"/usuarios" , { headers: {"Authorization" : `Bearer ${token}`} }).subscribe({
            next:(result:any) => this.readApi(result.data),
            error:(err:any) => Utils.writeInline("No se pudo obtener los datos del"),
        });      
    }

    findToken() : Observable<AxiosResponse<any[]>> {
        return this.httpServ.post(this.api+'/auth/login',{login:"ag",contrasena:"ag1996"});
    }

    async readApi(items:any){
        let insertados:number=0;
        if(items.length !== 0){
            let procesado:number=0;
            for(let item of items){
                if((await this.userRep.find({where:{login:ILike(item.login)}})).length == 0){
                  await this.userRep.save(this.userRep.create(Utils.reformCampos(Utils.reformData("create",item)))).catch(result => Utils.writeInline("item duplicado:"+item.login));
                  insertados++;
                }
                procesado++;
                Utils.processLoading(procesado,items.length);
                setTimeout(()=> Utils.writeInline(""),5000);
            }
        }
        insertados == 0? false:Utils.writeInline(insertados+" registros insertados");
     }


}
