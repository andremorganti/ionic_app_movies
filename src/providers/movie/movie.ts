//import { HttpClient } from '@angular/common/http';
import { Http } from "@angular/http";
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private basePath = "https://api.themoviedb.org/3";
  private apiKey = "?api_key=775fe04caa0b2b32b45cbe1888349f2e";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLastMovies(){
    let url = this.basePath + "/movie/latest" + this.apiKey
    console.log(url)
    return this.http.get(url)
}

}
