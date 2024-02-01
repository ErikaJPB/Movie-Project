import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  private baseUrl = environment.baseUrl;

  private apiKey = environment.apiKey;

  private bannerApi = environment.bannerApi;

  constructor(private http: HttpClient) {}

  // Banner Data
  bannerApiData(): Observable<any> {
    return this.http.get(this.bannerApi);
  }

  // Trending Movies
  trendingApiData(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`
    );
  }

  // Search Movie
  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'data');
    return this.http.get(
      `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`
    );
  }

  // Movie Details
  getMovieDetails(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  // Movie Video
  getMovieVideo(id: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`
    );
  }

  // Movie Cast
  getMovieCast(id: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`
    );
  }
}
