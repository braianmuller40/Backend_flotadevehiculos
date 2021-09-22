import { IsDate, IsOptional, IsString } from "class-validator";

export class GenericDto {
    
    @IsOptional()
    @IsDate()
    fechaCreacion: Date;

    @IsOptional()
    @IsDate()
    fechaAlteracion: Date;

    @IsOptional()
    @IsString()
    descripcion: string;
}