import { IsEnum, IsInt, IsString } from "class-validator";
import { TipoUsuario } from "src/enums/tipoUsuario.enum";

export class UsuarioDto {
    
    @IsInt()
    id: number;

    @IsString()
    nombre: string;

    @IsString()
    login: string;

    @IsString()
    contrasena: string;

    @IsEnum(TipoUsuario)
    tipoUsuario: TipoUsuario;
}