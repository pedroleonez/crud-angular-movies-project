import { ResolveFn } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { inject } from '@angular/core';
import { Movie } from '../models/movie';
import { Observable, of } from 'rxjs';

export const movieResolver: ResolveFn<Observable<Movie>> = (
  route,
  state,
  service: MoviesService = inject(MoviesService)
) => {
  if (route.params?.['id']) {
    return service.loadById(route.params['id']);
  }
  return of({
    id: '',
    title: '',
    movieYear: null as unknown as number,
    director: '',
    genre: '',
  });
};
