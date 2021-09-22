import { IsEnum, IsInt, isInt, IsString } from "class-validator";
import { TipoUsuario } from "src/enums/tipoUsuario.enum";
import { GenericDto } from "src/shared/abstract/generic-dto";




export class ServicioDto extends GenericDto{
    
    @IsInt()
    id: number;

    @IsEnum(TipoUsuario)
    usuario: TipoUsuario;

    @IsString()
    tipoServicio: string;

    @IsInt()
    valorServicio: number;

    @IsString()
    fechaServicio: Date;

    @IsInt()
    kmInicial: number;

    @IsInt()
    kmFinal: number;

}