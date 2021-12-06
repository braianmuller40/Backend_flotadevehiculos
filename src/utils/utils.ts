import { Logger } from "@nestjs/common";
import { dir } from "console";
import { AuthService } from "src/auth/auth.service";
var readline = require('readline');

export class Utils{
private authServ:AuthService;
    static conf={
      on:true,
      security:true,
      ip:"https://api-users-datapar.herokuapp.com/usuarios",
      ipAuth:"https://api-users-datapar.herokuapp.com/auth",
      infoAuth:{key:"apidatuser"},
      campos:{
        login_usuario:"login",
        nombre_usuario:"nombre"
     }, 
    }

    //reform Uppercase
    static reformData(item:any){
        for (let i in  item) {
          (typeof item[i] === 'string') && (i !== "login" && i !== "password")?
            item[i] = item[i].toUpperCase():false;
         }
        return item;
      }

    //reform campos
    static reformCampos(items:any){
      let target:{[key:string]:any}=items;
      for(let i in target){
        for(let t in this.conf.campos){
          if(i==t){
            target[this.conf.campos[t]]=target[i];
            delete target[i];
          }
        }
      }
      target["fecha_creacion"]? false:target["fecha_creacion"] = this.getCurrentDate();
      target["tipo_usuario"]? false:target["tipo_usuario"] = "USUARIO";

      return target;
    }


    static processLoading(state:number,totalLength:number){
      let increment:number = (state * 100)/totalLength ; 
      this.writeInline("Verificando API: "+Math.round(increment)+"%");
      if(increment >= 100){
      this.writeInline("");
      }
    }


    static writeInline(item:any){
      readline.clearLine(process.stdout,0);
      readline.cursorTo(process.stdout, 0, null);
      process.stdout.write(item);
    }


    static getCurrentDate(){
      let newDate = new Date();
      return new Date(newDate.setMinutes(newDate.getMinutes() - newDate.getTimezoneOffset()));
    }

    static getDate(day:any,month:any,year:any){
      let nDate = this.getCurrentDate();
      let Day = day? day : nDate.getDate();
      let Month = month? month:nDate.getMonth()+1;
      let Year = year? year:nDate.getFullYear();
      let sDate:string = Year.toString()+'-'+Month.toString()+'-'+Day.toString();
      return new Date(sDate);
    }

}