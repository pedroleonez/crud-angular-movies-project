import { HttpClient } from '@angular/common/http';
import { Movie } from './../models/movie';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private readonly API = '/api/movies';

  constructor(private readonly httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Movie[]>(`${this.API}/all`)
    .pipe(
      first(),
      delay(2000),
      tap(movies => console.log(movies))
    );
  }
}
