import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Serie } from '../../interfaces/serie/serie.interface';
import { SerieDto } from '../../dto/serie.dto/serie.dto';

@Injectable()
export class SerieService {
  constructor(@InjectModel('Serie') private model: Model<Serie>) {}
  async create(createdSerieDTO: SerieDto): Promise<Serie> {
    const createdSerie = new this.model(createdSerieDTO);
    if (createdSerie.votos.length > 0)
      createdSerie.puntuacion =
        createdSerie.votos.reduce(function (a, b) {
          return a + b;
        }, 0) / createdSerie.votos.length;
    else createdSerie.puntuacion = 0;
    return await createdSerie.save();
  }
  async getSeries(): Promise<Serie[]> {
    return this.model.find();
  }
  async getSerie(idSerie: string): Promise<Serie> {
    return this.model.findOne({ _id: idSerie });
  }

  async deleteSerie(idSerie: string): Promise<Serie[]> {
    return this.model.findByIdAndDelete(idSerie);
  }

  async updateSerie(idSerie: string, serieDto: SerieDto): Promise<Serie[]> {
    return this.model.findByIdAndUpdate(
      idSerie,
      { $set: serieDto },
      { new: true },
    );
  }
}
