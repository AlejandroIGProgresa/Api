import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SerieService } from './services/serie/serie.service';
import { SerieDto } from './dto/serie.dto/serie.dto';

@Controller('api')
export class SeriesController {
  constructor(private readonly serieService: SerieService) {}

  @Post('serie/register')
  async register(@Body() createdSerieDTO: SerieDto) {
    return this.serieService.create(createdSerieDTO);
  }

  @Get('series')
  async getSeries() {
    return this.serieService.getSeries();
  }

  @Get('series/:idSerie')
  async getSerie(@Param('idSerie') idSerie: string) {
    return await this.serieService.getSerie(idSerie);
  }
}
