import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public object_feed = {
    title: "Luke Skywalker",
    description: "This is the description",
    date: "November, 5 1955",
    qtd_likes: 12,
    qtd_comments: 4,
    time_comment: '11h ago'
  }


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider
    ) {
  }

  ionViewDidLoad() {
    this.movieProvider.getLastMovies().subscribe(
      data=>{
        console.log(data);
      }, error => {
        console.log(error);
      }
    )
  }

}
