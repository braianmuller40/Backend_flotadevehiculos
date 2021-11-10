import { IsInt, IsOptional, IsString } from "class-validator";
import { GenericDto } from "src/shared/abstract/generic-dto";


export class TiposServicioDto extends GenericDto{
    
    @IsOptional()
    @IsInt()
    id: number;

}