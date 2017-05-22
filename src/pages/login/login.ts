import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AnnouncementModal } from '../announcement-modal/announcement-modal';
import { Order } from '../order/order';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}
	
  openAnnouncement() {
    let modal = this.modalCtrl.create(AnnouncementModal);
    modal.present();
  }
  openHome() {
    this.navCtrl.setRoot(Order);
  }
  
}
