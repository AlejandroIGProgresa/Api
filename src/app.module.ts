import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SeriesController } from './series/series.controller';
import { SeriesModule } from './series/series.module';
import { SerieService } from './series/services/serie/serie.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:toor@cluster0.dnv4dhd.mongodb.net/?retryWrites=true&w=majority',
    ),
    SeriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
