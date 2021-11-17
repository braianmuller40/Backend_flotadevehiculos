import { IsEnum, IsInt, IsOptional, IsString } from "class-validator";
import { TipoUsuario } from "src/enums/tipo_usuario.enum";
import { GenericDto } from "src/shared/abstract/generic-dto";

export class UsuariosDto extends GenericDto {
    
    @IsOptional()
    @IsInt()
    id: number;

    @IsString()
    nombre: string;

    @IsString()
    login: string;

    @IsOptional()
    @IsString()
    password: string;

    @IsEnum(TipoUsuario)
    tipo_usuario: TipoUsuario;
}