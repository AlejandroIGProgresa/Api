import { Module } from '@nestjs/common';
import { SerieService } from './services/serie/serie.service';
import { SeriesController } from './series.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SerieSchema } from './schemas/serie.schema/serie.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Serie', schema: SerieSchema }]),
  ],
  providers: [SerieService],
  controllers: [SeriesController],
})
export class SeriesModule {}
