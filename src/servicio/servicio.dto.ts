import { IsEnum, IsInt, isInt, IsString } from "class-validator";
import { TipoServicio } from "src/enums/tipoServicio.enum";
import { Usuario } from "src/enums/tipoUsuario.enum";




export class ServicioDto {
    
    @IsInt()
    id: number;

    @IsEnum(Usuario)
    usuario: Usuario;

    @IsEnum(TipoServicio)
    tipoServicio: TipoServicio;

    @IsInt()
    valorServicio: number;

    @IsString()
    fechaServicio: Date;

    @IsInt()
    kmInicial: number;

    @IsInt()
    kmFinal: number;

    @IsString()
    descripcion: string;

}