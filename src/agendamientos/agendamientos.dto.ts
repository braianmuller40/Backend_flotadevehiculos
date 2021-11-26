
import { Type } from "class-transformer";
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

    @IsOptional()
    @Type(() => Date)
    fecha_objetivo:Date;

    @IsOptional()
    @IsEnum(TipoPeriodo)
    tipo_periodo:TipoPeriodo;

    @IsOptional()
    @IsInt()
    periodo:number;


}