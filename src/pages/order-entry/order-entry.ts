import { Component } from '@angular/core';
import { NavController, ModalController, Events } from 'ionic-angular';
import { SelectCustomerModal } from './select-customer-modal';

@Component({
  selector: 'page-order-entry',
  templateUrl: 'order-entry.html'
})
export class OrderEntry {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public ionicEvents: Events) {
  	
  }

  searchCustomer() {
  	let modal = this.modalCtrl.create(SelectCustomerModal);
    modal.present();
  }



}
