import { Type } from "class-transformer";
import { IsDate, IsEnum, IsInt, isInt, IsOptional, IsString } from "class-validator";
import { Estado } from "src/enums/estado.enum";
import { TipoUsuario } from "src/enums/tipo_usuario.enum";
import { GenericDto } from "src/shared/abstract/generic-dto";




export class ServiciosDto extends GenericDto{
    
    @IsOptional()
    @IsInt()
    id: number;

    @Type(() => Date)
    fecha_inicio:Date;

    @Type(() => Date)
    fecha_fin:Date;

    @IsInt()
    km_inicial:number;

    @IsInt()
    km_final:number;

    @IsInt()
    valor_servicio:number;

    @IsEnum(Estado)
    estado:Estado;

}