import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies-list',
  imports: [MatTableModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent {

  movies: Movie[] = [];

}
