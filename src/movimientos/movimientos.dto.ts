import { IsDate, IsEnum, isInt, IsInt, IsNumber } from "class-validator";
import { Estado } from "src/enums/estado.enum";
import { GenericDto } from "src/shared/abstract/generic-dto";

export class MovimientosDto extends GenericDto{

    @IsInt()
    id:number;

    @IsDate()
    fecha_inicio:Date;

    @IsDate()
    fecha_fin:Date;

    @IsInt()
    km_inicial:number;

    @IsInt()
    km_final:number;

    @IsInt()
    valor_servicio:number;

    @IsEnum(Estado)
    estado:Estado;

}