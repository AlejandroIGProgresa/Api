import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Serie } from '../../interfaces/serie/serie.interface';
import { SerieDto } from '../../dto/serie.dto/serie.dto';

@Injectable()
export class SerieService {
  constructor(@InjectModel('Serie') private model: Model<Serie>) {}
  async create(createSerieDTO: SerieDto): Promise<Serie> {
    const createdSerie = new this.model(createSerieDTO);
    return await createdSerie.save();
  }
  async getSeries(): Promise<Serie[]> {
    return this.model.find();
  }
  async getSerie(idSerie: string): Promise<Serie> {
    return this.model.findOne({ _id: idSerie });
  }
}
