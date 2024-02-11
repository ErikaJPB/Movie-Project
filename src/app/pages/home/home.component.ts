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
  actionMoviesResult: any = [];
  thrillerMoviesResult: any = [];
  comedyMoviesResult: any = [];
  romanceMoviesResult: any = [];
  animationMoviesResult: any = [];
  adventureMoviesResult: any = [];
  familyMoviesResult: any = [];
  dramaMoviesResult: any = [];
  scienceFictionMoviesResult: any = [];
  documentaryMoviesResult: any = [];

  constructor(private movieService: MovieApiServiceService) {}

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovies();
    this.thrillerMovies();
    this.comedyMovies();
    this.romanceMovies();
    this.animationMovies();
    this.adventureMovies();
    this.familyMovies();
    this.dramaMovies();
    this.scienceFictionMovies();
    this.documentaryMovies();
  }

  bannerData(): any {
    this.movieService.bannerApiData().subscribe((data) => {
      this.bannerResult = data.results;
    });
  }

  trendingData(): any {
    this.movieService.trendingApiData().subscribe((data) => {
      this.trendingResult = data.results;
    });
  }

  // Action Movies
  actionMovies() {
    this.movieService.getActionMovies().subscribe((data) => {
      this.actionMoviesResult = data.results;
    });
  }

  // Thriller Movies
  thrillerMovies(): any {
    this.movieService.getThrillerMovies().subscribe((data) => {
      this.thrillerMoviesResult = data.results;
    });
  }

  // Comedy Movies
  comedyMovies(): any {
    this.movieService.getComedyMovies().subscribe((data) => {
      this.comedyMoviesResult = data.results;
    });
  }

  // Romance Movies
  romanceMovies(): any {
    this.movieService.getRomanceMovies().subscribe((data) => {
      this.romanceMoviesResult = data.results;
    });
  }

  // Animation Movies
  animationMovies(): any {
    this.movieService.getAnimationMovies().subscribe((data) => {
      this.animationMoviesResult = data.results;
    });
  }

  // Adventure Movies
  adventureMovies(): any {
    this.movieService.getAdventureMovies().subscribe((data) => {
      this.adventureMoviesResult = data.results;
    });
  }

  // Family Movies
  familyMovies(): any {
    this.movieService.getFamilyMovies().subscribe((data) => {
      this.familyMoviesResult = data.results;
    });
  }

  // Drama Movies
  dramaMovies(): any {
    this.movieService.getDramaMovies().subscribe((data) => {
      this.dramaMoviesResult = data.results;
    });
  }

  // Science Fiction Movies
  scienceFictionMovies(): any {
    this.movieService.getScienceFictionMovies().subscribe((data) => {
      this.scienceFictionMoviesResult = data.results;
    });
  }

  // Documentary Movies
  documentaryMovies(): any {
    this.movieService.getDocumentaryMovies().subscribe((data) => {
      this.documentaryMoviesResult = data.results;
    });
  }
}
