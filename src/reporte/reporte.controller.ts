import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ReporteService } from './reporte.service';

@Controller('reporte')
export class ReporteController {

    constructor(private reporteServ:ReporteService){}

    @UseGuards(AuthGuard('jwt'))
    @Get("getReporte")
    async gRep(@Query() query: any) {
      const data = this.reporteServ.getReporte(query);
      return  data ;
    }
}
