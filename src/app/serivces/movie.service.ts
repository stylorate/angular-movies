import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  private movies: Movie[] = [];

  constructor(private http: HttpClient) {}

  findAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:8082/api/movies');
  }
}
