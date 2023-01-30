import { Schema } from 'mongoose';

export const SerieSchema = new Schema({
  nombre: String,
  imagenes: [String],
  categorias: [String],
  num_capitulos: Number,
  emision: Number,
  sinopsis: String,
  votos: [Number],
  puntuacion: Number,
});
