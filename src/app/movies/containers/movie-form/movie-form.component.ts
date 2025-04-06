import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms'
import { RouterOutlet } from '@angular/router'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatToolbar } from '@angular/material/toolbar'
import { MatSelectModule } from '@angular/material/select'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'

import { MoviesService } from '../../services/movies.service'
import { Movie } from '../../models/movie'

@Component({
  selector: 'app-movie-form',
  imports: [RouterOutlet, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatToolbar, MatSelectModule, MatSnackBarModule],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.scss'
})
export class MovieFormComponent {

  form: FormGroup<{
    title: FormControl<string>;
    movieYear: FormControl<number>;
    director: FormControl<string>;
    genre: FormControl<string>;
  }>;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: MoviesService,
    private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      title: (''),
      movieYear: (null as unknown as number),
      director: (''),
      genre: ('')
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe({
        next: (result) => {
          this.onSuccess();
          this.form.reset();
        },
        error: (error) => this.onError()
      });
  }

  onClear() {
    this.form.reset();
  }

  private onSuccess() {
    this.snackBar.open('Filme salvo com sucesso!', '', {
      duration: 3000
    });
  }

  private onError() {
    this.snackBar.open('Erro ao salvar o filme!', '', {
      duration: 3000
    });
  }
}
