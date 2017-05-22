import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ShippingAddressModal } from './shipping-address-modal';
import { SelectProduct } from './select-product';

@Component({
  selector: 'page-view-customer',
  templateUrl: 'view-customer.html'
})
export class ViewCustomer {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  openShippingAddressModal() {
    let modal = this.modalCtrl.create(ShippingAddressModal);
    modal.present();
  }

  selectProduct() {
  	this.navCtrl.push(SelectProduct);
  }

}
