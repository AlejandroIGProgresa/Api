export interface Serie extends Document {
  _id: string;
  nombre: string;
  imagenes: string[];
  categorias: string[];
  num_capitulos: number;
  emision: number;
  sinopsis: string;
  votos: number[];
  puntuacion: number;
}
