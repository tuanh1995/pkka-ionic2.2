import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events, ModalController } from 'ionic-angular';
import { ShippingAddressModal } from './shipping-address-modal';

@Component({
  selector: 'edit-address-modal',
  templateUrl: 'edit-address-modal.html',
})
export class EditAddressModal {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public ionicEvents: Events, public modalCtrl: ModalController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(ShippingAddressModal);
    modal.present();
  }
  save(id) {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(ShippingAddressModal);
    modal.present();
  }
}
