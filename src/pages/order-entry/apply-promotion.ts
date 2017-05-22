import { Component } from '@angular/core'
import { NavController, ModalController, Events } from 'ionic-angular'
import { OtherInformation } from './other-information'
@Component({
  selector: 'page-apply-promotion',
  templateUrl: 'apply-promotion.html'
})
export class ApplyPromotion {

  constructor(public navCtrl: NavController) {
  }

  otherInformation(){
  	this.navCtrl.push(OtherInformation);
  }
}
