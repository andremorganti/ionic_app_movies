import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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

  private user_name: string = 'Luke Skywalker';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(number1: number, number2: number): void {
    alert(number1 + number2);
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(10, 99);
  }

}
