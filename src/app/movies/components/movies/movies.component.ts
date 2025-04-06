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

import { Movie } from '../../models/movie'
import { MoviesService } from '../../services/movies.service'
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component'
import { MoviesListComponent } from '../movies-list/movies-list.component'

@Component({
  selector: 'app-movies',
  imports: [MatTableModule, MatCardModule, MatToolbarModule, MatProgressSpinnerModule, CommonModule, MatIconModule, MatButtonModule, MoviesListComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {

  movies$: Observable<Movie[]>;

  constructor(
    private readonly moviesService: MoviesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
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

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
