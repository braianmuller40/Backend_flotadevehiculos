import { Type } from "class-transformer";
import { IsEnum, IsInt, IsOptional, IsString, Length } from "class-validator";
import { Disponibilidad } from "src/enums/disponibilidad.enum";
import { GenericDto } from "src/shared/abstract/generic-dto";

export class AutosDto extends GenericDto{
    
    @IsOptional()
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

    @Type(() => Number)
    ano_modelo: number;

    @Type(() => Number)
    ano_fabricacion: number;

    @IsEnum(Disponibilidad)
    disponibilidad: Disponibilidad;

}