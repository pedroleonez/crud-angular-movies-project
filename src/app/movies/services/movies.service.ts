import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { delay, first, tap } from 'rxjs'

import { Movie } from './../models/movie'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private readonly API = '/api/movies';

  constructor(private readonly httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Movie[]>(`${this.API}/getall`)
    .pipe(
      first(),
      delay(2000),
      tap(movies => console.log(movies))
    );
  }

  save(record: Partial<Movie>) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  loadById(id: string) {
    return this.httpClient.get<Movie>(`${this.API}/get/${id}`)
    .pipe(
      first()
    );
  }

  private create(record: Partial<Movie>) {
    return this.httpClient.post<Movie>(`${this.API}/add`, record)
    .pipe(
      first()
    );
  }

  private update(record: Partial<Movie>) {
    return this.httpClient.put<Movie>(`${this.API}/update/${record.id}`, record)
    .pipe(
      first()
    );
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.API}/delete/${id}`)
    .pipe(
      first()
    );
  }
}
