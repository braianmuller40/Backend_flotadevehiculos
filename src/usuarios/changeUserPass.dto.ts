import { IsOptional, IsString } from "class-validator";
import { genericAtributes } from "src/shared/abstract/generic-atributes";

export class ChangeUserPassDto{   

    @IsString()
    login: string;

    @IsString()
    password: string;

    @IsString()
    new_password: string;

    @IsOptional()
    @IsString()
    fecha_alteracion: Date;
}