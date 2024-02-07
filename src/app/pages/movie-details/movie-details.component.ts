import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private movieApiService: MovieApiServiceService,
    private router: ActivatedRoute
  ) {}

  getMovieDetailById: any;
  getMovieVideoById: any;
  getMovieCastById: any;

  ngOnInit() {
    let id = this.router.snapshot.paramMap.get('id');
    console.log(id, 'id');
    this.getMovieById(id);
    this.getMovieVideo(id);
    this.getMovieCast(id);
  }

  getMovieById(id: any) {
    this.movieApiService.getMovieDetails(id).subscribe((data: any) => {
      console.log(data, 'movie details');
      this.getMovieDetailById = data;
    });
  }

  getMovieVideo(id: any) {
    this.movieApiService.getMovieVideo(id).subscribe((data: any) => {
      console.log(data, 'movie video');
      data.results.forEach((element: any) => {
        if (element.type === 'Trailer') {
          this.getMovieVideoById = element.key;
        }
      });
    });
  }

  getMovieCast(id: any) {
    this.movieApiService.getMovieCast(id).subscribe((data: any) => {
      console.log(data, 'movie cast');
      this.getMovieCastById = data.cast;
    });
  }
}
