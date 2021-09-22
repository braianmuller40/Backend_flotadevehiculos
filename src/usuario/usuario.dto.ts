import { IsEnum, IsInt, IsString } from "class-validator";
import { TipoUsuario } from "src/enums/tipoUsuario.enum";
import { GenericDto } from "src/shared/abstract/generic-dto";

export class UsuarioDto extends GenericDto {
    
    @IsInt()
    id: number;

    @IsString()
    nombre: string;

    @IsString()
    login: string;

    @IsString()
    password: string;

    @IsEnum(TipoUsuario)
    tipoUsuario: TipoUsuario;
}