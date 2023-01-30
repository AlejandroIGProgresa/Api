export class SerieDto {
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

/*function contar(votos: number[]): number {
  return votos.reduce(function (a, b) {
    return a + b;
  }, 0);
}*/
