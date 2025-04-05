import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { Movie } from '../../models/movie';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MoviesService } from '../../services/movies.service';
import { catchError, Observable, of } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import { GenrePipe } from '../../../shared/pipes/genre.pipe';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-movies-list',
  imports: [MatTableModule, MatCardModule, MatToolbarModule, MatProgressSpinnerModule, CommonModule, MatIconModule, GenrePipe, MatButtonModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent {

  movies$: Observable<Movie[]>;
  displayedColumns = ['title', 'year', 'director', 'genre', 'actions'];

  constructor(
    private readonly moviesService: MoviesService,
    public dialog: MatDialog
  ) {
    this.movies$ = this.moviesService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar a lista de filmes.');
          return of([]);
        })
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  // ngOnInit() {
  // }

}
