import { TestBed } from '@angular/core/testing';
import { ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { movieResolver } from './movie.resolver';
import { Movie } from '../models/movie';

describe('movieResolver', () => {
  const executeResolver: ResolveFn<Movie | Observable<Movie>> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
      TestBed.runInInjectionContext(() => movieResolver(route, state));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
