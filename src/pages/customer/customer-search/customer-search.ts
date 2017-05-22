import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

@Component({
  selector: 'page-customer-list',
  templateUrl: 'customer-search.html'
})
export class CustomerAdvanceSearch {

  constructor(public navCtrl: NavController , public navParams: NavParams, public viewCtrl: ViewController) {
  }

   ionViewDidLoad() {
    console.log('ionViewDidLoad AnnouncementModal');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
