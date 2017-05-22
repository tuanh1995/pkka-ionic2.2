import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events, ModalController } from 'ionic-angular';
import { ShippingAddressModal } from './shipping-address-modal';

@Component({
  selector: 'add-address-modal',
  templateUrl: 'add-address-modal.html',
})
export class AddAddressModal {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public ionicEvents: Events, public modalCtrl: ModalController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(ShippingAddressModal);
    modal.present();
  }
  save() {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(ShippingAddressModal);
    modal.present();
  }
}
