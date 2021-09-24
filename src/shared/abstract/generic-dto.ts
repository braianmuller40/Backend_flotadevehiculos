import { IsDate, IsOptional, IsString } from "class-validator";

export class GenericDto {
    
    @IsOptional()
    @IsDate()
    fecha_creacion: Date;

    @IsOptional()
    @IsDate()
    fecha_alteracion: Date;

    @IsOptional()
    @IsString()
    descripcion: string;
}