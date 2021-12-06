
import { Type } from "class-transformer";
import { IsDate, IsEnum, IsInt, IsOptional } from "class-validator";
import { Autos } from "src/autos/autos.entity";
import { TipoAgendamiento } from "src/enums/tipo_agendamiento.enum";
import { TipoPeriodo } from "src/enums/tipo_periodo.enum";
import { GenericDto } from "src/shared/abstract/generic-dto";
import { TiposServicio } from "src/tipos-servicio/tipos-servicio.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { ManyToOne } from "typeorm";


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

    @ManyToOne(() => Usuarios, Usuarios => Usuarios.agendamientos)
    usuario: Usuarios;

    @ManyToOne(() => TiposServicio, TiposServicios => TiposServicios.agendamientos)
    tipo_servicio: TiposServicio;

    @ManyToOne(() => Autos, Autos => Autos.agendamientos)
    auto: Autos;

}