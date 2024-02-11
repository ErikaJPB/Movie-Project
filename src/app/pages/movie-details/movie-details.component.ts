import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private movieApiService: MovieApiServiceService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private http: HttpClient
  ) {}

  getMovieDetailById: any;
  getMovieVideoById: any;
  getMovieCastById: any;

  ngOnInit() {
    let id = this.router.snapshot.paramMap.get('id');
    this.getMovieById(id);
    this.getMovieVideo(id);
    this.getMovieCast(id);
  }

  getMovieById(id: any) {
    this.movieApiService.getMovieDetails(id).subscribe((data: any) => {
      this.getMovieDetailById = data;
    });
  }

  getMovieVideo(id: any) {
    this.movieApiService.getMovieVideo(id).subscribe((data: any) => {
      data.results.forEach((element: any) => {
        if (element.type === 'Trailer') {
          this.getMovieVideoById = element.key;
        }
      });
    });
  }

  getTrailerUrl() {
    if (this.getMovieVideoById) {
      // const videoUrl = `https://www.themoviedb.org/video/play?key=${this.getMovieVideoById}`;
      const videoUrl = `https://www.youtube.com/embed/${this.getMovieVideoById}`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
    }
    return '';
  }

  getMovieCast(id: any) {
    this.movieApiService.getMovieCast(id).subscribe((data: any) => {
      this.getMovieCastById = data.cast;
    });
  }
}
