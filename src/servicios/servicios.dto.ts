import { Type } from "class-transformer";
import { IsDate, IsEnum, IsInt, isInt, IsOptional, IsString } from "class-validator";
import { Autos } from "src/autos/autos.entity";
import { Estado } from "src/enums/estado.enum";
import { GenericDto } from "src/shared/abstract/generic-dto";
import { TiposServicio } from "src/tipos-servicio/tipos-servicio.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";




export class ServiciosDto extends GenericDto{
  
    @Type(() => Date)
    fecha_inicio:Date;

    @IsOptional()
    @Type(() => Date)
    fecha_fin:Date;

    @IsInt()
    km_inicial:number;

    @IsOptional()
    @IsInt()
    km_final:number;

    @IsOptional()
    @IsInt()
    valor_servicio:number;

    @IsEnum(Estado)
    estado:Estado;

    @Type(() =>TiposServicio)
    tipo_servicio:TiposServicio;

    @Type(()=>Autos)
    auto:Autos;

    @Type(()=>Usuarios)
    usuario:Usuarios;


}