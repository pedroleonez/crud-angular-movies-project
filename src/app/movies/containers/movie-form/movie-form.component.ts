import { Component, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { MatFormFieldModule, MatHint } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';

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
    genre: FormControl<string>;
  }>;

  constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly service: MoviesService,
    private readonly snackBar: MatSnackBar,
    private readonly route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      id: '',
      title: ['', [Validators.required, Validators.maxLength(100)]],
      movieYear: [
        null as unknown as number,
        [
          Validators.required,
          Validators.maxLength(4),
          Validators.max(new Date().getFullYear())
        ],
      ],
      genre: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    const movie: Movie = this.route.snapshot.data['movie'];
    this.form.setValue({
      id: movie.id,
      title: movie.title,
      movieYear: movie.movieYear,
      genre: movie.genre,
    });
  }

  errorMessage(fieldName: string): string {
    const field = this.form.get(fieldName);
    if (field?.hasError('required')) {
      return 'O campo é obrigatório';
    }
    if (field?.hasError('maxlength')) {
      if (fieldName === 'title') {
        return 'O título deve ter no máximo 100 caracteres';
      } else if (fieldName === 'movieYear') {
        return 'Máximo de 4 dígitos';
      }
    }
    if (field?.hasError('max')) {
      return `Deve ser menor que ${new Date().getFullYear()}.`;
    }
    return 'Campo inválido';
  }

  onSubmit() {
    if (this.form.invalid) {
      // Marca todos os campos como tocados para mostrar os erros de validação
      this.form.markAllAsTouched();
      this.snackBar.open('Por favor, corrija os erros no formulário.', '', {
        duration: 3000,
      });
      return;
    }

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
