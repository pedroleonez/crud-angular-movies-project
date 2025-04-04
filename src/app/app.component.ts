import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { MoviesListComponent } from './movies/components/movies-list/movies-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MoviesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crud-angular';
}
