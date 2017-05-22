import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events, ModalController } from 'ionic-angular';
import { AddAddressModal } from './add-address-modal';
import { EditAddressModal } from './edit-address-modal';

@Component({
  selector: 'shipping-address-modal',
  templateUrl: 'shipping-address-modal.html',
})
export class ShippingAddressModal {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public ionicEvents: Events, public modalCtrl: ModalController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  selectAddress(id) {
    this.viewCtrl.dismiss();
  }
  addAddress() {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(AddAddressModal);
    modal.present();
  }
  editAddress() {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(EditAddressModal);
    modal.present();
  }
}
