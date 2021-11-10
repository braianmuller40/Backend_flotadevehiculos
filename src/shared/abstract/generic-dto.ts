import { Type } from "class-transformer";
import { IsDate, IsOptional, IsString } from "class-validator";

export class GenericDto {
    
    @IsOptional()
    @Type(() => Date)
    fecha_creacion: Date;

    @IsOptional()
    @Type(() => Date)
    fecha_alteracion: Date;

    @IsOptional()
    @IsString()
    descripcion: string;
}