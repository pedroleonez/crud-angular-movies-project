import { Component } from '@angular/core'
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute, RouterOutlet } from '@angular/router'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatToolbar } from '@angular/material/toolbar'
import { MatSelectModule } from '@angular/material/select'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'

import { MoviesService } from '../../services/movies.service'
import { Movie } from '../../models/movie'
import { coerceStringArray } from '@angular/cdk/coercion'

@Component({
  selector: 'app-movie-form',
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbar,
    MatSelectModule,
    MatSnackBarModule,
  ],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.scss',
})
export class MovieFormComponent {
  form: FormGroup<{
    id: FormControl<string>;
    title: FormControl<string>;
    movieYear: FormControl<number>;
    director: FormControl<string>;
    genre: FormControl<string>;
  }>;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: MoviesService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      id: '',
      title: '',
      movieYear: null as unknown as number,
      director: '',
      genre: ''
    });
  }

  ngOnInit(): void {
    const movie: Movie = this.route.snapshot.data['movie'];
    this.form.setValue({
      id: movie.id,
      title: movie.title,
      movieYear: movie.movieYear,
      director: movie.director,
      genre: movie.genre
    })
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: (result) => {
        this.onSuccess();
        this.form.reset();
      },
      error: (error) => this.onError(),
    });
  }

  onClear() {
    this.form.reset();
  }

  private onSuccess() {
    this.snackBar.open('Filme salvo com sucesso!', '', {
      duration: 3000,
    });
  }

  private onError() {
    this.snackBar.open('Erro ao salvar o filme!', '', {
      duration: 3000,
    });
  }
}
