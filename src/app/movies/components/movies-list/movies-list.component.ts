import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { Movie } from '../../models/movie';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies-list',
  imports: [MatTableModule, MatCardModule, MatToolbarModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent {

  movies: Observable<Movie[]>;
  displayedColumns = ['title', 'director'];

  constructor(private readonly moviesService: MoviesService) {
    this.movies = this.moviesService.list();
  }

  // ngOnInit() {
  // }

}
