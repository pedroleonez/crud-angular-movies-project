import { Routes } from '@angular/router'

import { MoviesListComponent } from './components/movies-list/movies-list.component'
import { MovieFormComponent } from './containers/movie-form/movie-form.component'

export const MOVIES_ROUTES: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '', component: MoviesListComponent},
  {path: 'new', component: MovieFormComponent},
];
