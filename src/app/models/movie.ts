import { Actor } from './actor';
import { Genre } from './genre';

export class Movie {
  id!: number;
  name!: string;
  description!: string;
  year!: string;
  movieScore!: string;
  duration!: string;
  price!: string;
  budget!: string;
  director!: string;
  url!: string;
  actor!: Actor[];
  genre!: Genre[];
}
