import { Component } from '@angular/core'
import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar'
import { catchError, Observable, of } from 'rxjs'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { CommonModule } from '@angular/common'
import { MatDialog } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { ActivatedRoute, Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar'

import { Movie } from '../../models/movie'
import { MoviesService } from '../../services/movies.service'
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component'
import { MoviesListComponent } from '../../components/movies-list/movies-list.component'

@Component({
  selector: 'app-movies',
  imports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MoviesListComponent,
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent {
  movies$: Observable<Movie[]> | null = null;

  constructor(
    private readonly moviesService: MoviesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.refresh();
  }

  refresh() {
    this.movies$ = this.moviesService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar a lista de filmes.');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(movie: Movie) {
    this.router.navigate(['edit', movie.id], { relativeTo: this.route });
  }

  onDelete(movie: Movie) {
    this.moviesService.delete(movie.id).subscribe(
      () => {
        this.refresh();
        this.snackBar.open('Filme removido com sucesso!', 'X', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
      },
      (error) => this.onError('Erro ao tentar remover o filme!')
    );
  }
}
