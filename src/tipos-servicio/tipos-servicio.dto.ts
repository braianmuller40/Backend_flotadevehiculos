import { IsInt, IsString } from "class-validator";
import { GenericDto } from "src/shared/abstract/generic-dto";


export class TiposServicioDto extends GenericDto{
    
    @IsInt()
    id: number;

}