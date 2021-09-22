import { IsInt, IsString } from "class-validator";


export class TiposServiciosDto {
    
    @IsInt()
    id: number;

    @IsString()
    descripcion: string;
}