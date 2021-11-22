import { Logger } from "@nestjs/common";
import { dir } from "console";
var readline = require('readline');

export class Utils{

    static conf={
      username:"login",
      fechaCreacion:"fecha_creacion",
    }


    static ipK(){
        return "http://192.168.100.37:3000";
    }

    //reform Uppercase
    static reformData(state:string, items:any){
      state === 'create' ? delete items.id:false;
        for (let item in  items) {
          (typeof items[item] === 'string') && (item !== "login" && item !== "password")?
           items[item] = items[item].toUpperCase():false;
         }
        return items;
      }

    //reform campos
    static reformCampos(items:any){
      let target:{[key:string]:any}=items;
      for(let i in target){
        for(let t in this.conf){
          if(i==t){
            target[this.conf[t]]=target[i];
            delete target[i];
          }
        }
      }
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


}