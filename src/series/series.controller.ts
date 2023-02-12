import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SerieService } from './services/serie/serie.service';
import { SerieDto } from './dto/serie.dto/serie.dto';

@Controller('api')
export class SeriesController {
  constructor(private readonly serieService: SerieService) {}

  @Post('series/register')
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

  @Delete('series/delete/:id')
  async deleteSerie(@Param('idSerie') idSerie: string) {
    return await this.serieService.deleteSerie(idSerie);
  }

  @Put('series/update/:id')
  async updateSerie(
    @Body() serieDTO: SerieDto,
    @Param('idSerie') idSerie: string,
  ) {
    return await this.serieService.updateSerie(idSerie, serieDTO);
  }
}
