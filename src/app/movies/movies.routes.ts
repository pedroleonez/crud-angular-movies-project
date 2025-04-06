import { Routes } from '@angular/router'

import { MoviesComponent } from './components/movies/movies.component'
import { MovieFormComponent } from './containers/movie-form/movie-form.component'

export const MOVIES_ROUTES: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '', component: MoviesComponent},
  {path: 'new', component: MovieFormComponent},
];
