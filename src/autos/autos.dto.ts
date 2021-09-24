import { Type } from "class-transformer";
import { IsEnum, IsInt, IsOptional, IsString, Length } from "class-validator";
import { GenericDto } from "src/shared/abstract/generic-dto";

export class AutosDto extends GenericDto{
    
    @IsInt()
    id: number;

    @IsString()
    chapa: string;

    @IsString()
    chassis: string;

    @IsString()
    fabricante: string;

    @IsString()
    modelo: string;

    @IsInt()
    kilometraje: number;

    @IsInt()
    anoModelo: number;

    @IsInt()
    anoFabricacion: number;

}