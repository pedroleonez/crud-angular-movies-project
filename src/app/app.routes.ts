import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'movies' },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.routes').then(m => m.MOVIES_ROUTES)
  }
];
