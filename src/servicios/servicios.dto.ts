import { IsDate, IsEnum, IsInt, isInt, IsString } from "class-validator";
import { Estado } from "src/enums/estado.enum";
import { TipoUsuario } from "src/enums/tipo_usuario.enum";
import { GenericDto } from "src/shared/abstract/generic-dto";




export class ServiciosDto extends GenericDto{
    
    @IsInt()
    id: number;

    @IsDate()
    fecha_inicio:Date;

    @IsDate()
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