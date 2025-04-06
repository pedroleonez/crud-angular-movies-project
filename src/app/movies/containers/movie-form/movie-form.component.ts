import { Component } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { RouterOutlet } from '@angular/router'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatToolbar } from '@angular/material/toolbar'
import { MatSelectModule } from '@angular/material/select'

import { MoviesService } from '../../services/movies.service'

@Component({
  selector: 'app-movie-form',
  imports: [RouterOutlet, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatToolbar, MatSelectModule],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.scss'
})
export class MovieFormComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: MoviesService
  ) {
    this.form = this.formBuilder.group({
      title: [null],
      movieYear: [null],
      director: [null],
      genre: [null]
    });
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(result => console.log(result));
    this.form.reset();
  }

  onClear() {
    this.form.reset();
  }
}
