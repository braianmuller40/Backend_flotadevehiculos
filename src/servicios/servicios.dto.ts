import { IsEnum, IsInt, isInt, IsString } from "class-validator";
import { TipoUsuario } from "src/enums/tipo_usuario.enum";
import { GenericDto } from "src/shared/abstract/generic-dto";




export class ServiciosDto extends GenericDto{
    
    @IsInt()
    id: number;

    @IsEnum(TipoUsuario)
    usuario: TipoUsuario;

    @IsString()
    tipo_servicio: string;

    @IsInt()
    valor_servicio: number;

    @IsString()
    fecha_servicio: Date;

    @IsInt()
    km_inicial: number;

    @IsInt()
    km_final: number;

}