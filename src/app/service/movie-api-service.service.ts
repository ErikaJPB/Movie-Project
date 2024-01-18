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

  bannerApiData(): Observable<any> {
    return this.http.get(this.bannerApi);
  }

  trendingApiData(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`
    );
  }
}
