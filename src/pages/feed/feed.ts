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
