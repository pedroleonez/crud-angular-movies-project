import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatTableModule } from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar'

import { GenrePipe } from '../../../shared/pipes/genre.pipe'
import { Movie } from '../../models/movie'

@Component({
  selector: 'app-movies-list',
  imports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    CommonModule,
    MatIconModule,
    GenrePipe,
    MatButtonModule,
  ],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
})
export class MoviesListComponent {

  @Input() movies: Movie[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

  readonly displayedColumns = ['title', 'year', 'director', 'genre', 'actions'];

  constructor() {}

  onAdd() {
    this.add.emit(true);
  }

  onEdit(movie: Movie) {
    this.edit.emit(movie);
  }

  onDelete(movie: Movie) {
    this.delete.emit(movie);
  }
}
