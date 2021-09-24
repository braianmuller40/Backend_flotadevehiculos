import { IsDate, IsEnum, IsInt } from "class-validator";
import { TipoAgendamiento } from "src/enums/tipoAgendamiento.enum";
import { TipoPeriodo } from "src/enums/tipoPeriodo.enum";
import { GenericDto } from "src/shared/abstract/generic-dto";


export class AgendamientoDto extends GenericDto{

    @IsInt()
    id:number;

    @IsEnum(TipoAgendamiento)
    tipoAgendamiento:TipoAgendamiento;

    @IsDate()
    fechaObjetivo:Date;

    @IsEnum(TipoPeriodo)
    tipoPeriodo:TipoPeriodo;

    @IsInt()
    periodo:number;


}