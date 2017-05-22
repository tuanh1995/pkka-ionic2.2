import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

@Component({
  selector: 'order-search',
  templateUrl: 'order-search.html'
})
export class OrderSearch {

  constructor(public navCtrl: NavController , public navParams: NavParams, public viewCtrl: ViewController) { }

  ngOnInit() {

  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
