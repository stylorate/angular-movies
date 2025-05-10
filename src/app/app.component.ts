import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Movie } from './models/movie';
import { MovieService } from './serivces/movie.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MovieComponent } from './movie/movie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, MovieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular-movies';
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.findAll().subscribe((movies) => (this.movies = movies));
  }
}
