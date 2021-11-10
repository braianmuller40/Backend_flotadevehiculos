import { IsDate, IsEnum, IsInt, IsOptional } from "class-validator";
import { TipoAgendamiento } from "src/enums/tipo_agendamiento.enum";
import { TipoPeriodo } from "src/enums/tipo_periodo.enum";
import { GenericDto } from "src/shared/abstract/generic-dto";


export class AgendamientosDto extends GenericDto{

    @IsOptional()
    @IsInt()
    id:number;

    @IsEnum(TipoAgendamiento)
    tipo_agendamiento:TipoAgendamiento;

    @IsDate()
    fecha_objetivo:Date;

    @IsEnum(TipoPeriodo)
    tipo_periodo:TipoPeriodo;

    @IsInt()
    periodo:number;


}