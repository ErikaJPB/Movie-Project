import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  bannerResult: any = [];
  trendingResult: any = [];

  constructor(private movieService: MovieApiServiceService) {}

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
  }

  bannerData(): any {
    this.movieService.bannerApiData().subscribe((data) => {
      console.log(data);
      this.bannerResult = data.results;
    });
  }

  trendingData(): any {
    this.movieService.trendingApiData().subscribe((data) => {
      console.log(data);
      this.trendingResult = data.results;
    });
  }
}
