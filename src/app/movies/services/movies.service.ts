import { HttpClient } from '@angular/common/http';
import { Movie } from './../models/movie';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private readonly apiUrl = 'assets/movies.json';

  constructor(private readonly httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Movie[]>(this.apiUrl)
    .pipe(
      first(),
      tap(movies => console.log(movies))
    );
  }
}
