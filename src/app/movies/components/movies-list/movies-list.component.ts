import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatTableModule } from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar'
import { ActivatedRoute, Router } from '@angular/router'

import { GenrePipe } from '../../../shared/pipes/genre.pipe'
import { Movie } from '../../models/movie'

@Component({
  selector: 'app-movies-list',
  imports: [MatTableModule, MatCardModule, MatToolbarModule, MatProgressSpinnerModule, CommonModule, MatIconModule, GenrePipe, MatButtonModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent {

  @Input() movies: Movie[] = [];
  readonly displayedColumns = ['title', 'year', 'director', 'genre', 'actions'];

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
