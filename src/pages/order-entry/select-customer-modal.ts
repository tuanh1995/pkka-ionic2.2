import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';
import { SelectProduct } from './select-product';
import { ViewCustomer } from './view-customer';

@Component({
  selector: 'modal-select-customer',
  templateUrl: 'select-customer-modal.html',
})
export class SelectCustomerModal {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public ionicEvents: Events) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  selectCustomer(id:string) {
  	this.viewCtrl.dismiss();
  	this.ionicEvents.publish('orderEntry:viewCustomer', id);
    // this.navCtrl.push(ViewCustomer);
  }
}
