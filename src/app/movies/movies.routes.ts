import { Routes } from '@angular/router';

import { MoviesComponent } from './containers/movies/movies.component';
import { MovieFormComponent } from './containers/movie-form/movie-form.component';
import { movieResolver } from './guards/movie.resolver';

export const MOVIES_ROUTES: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: MoviesComponent },
  {
    path: 'new',
    component: MovieFormComponent,
    resolve: { movie: movieResolver },
  },
  {
    path: 'edit/:id',
    component: MovieFormComponent,
    resolve: { movie: movieResolver },
  },
];
