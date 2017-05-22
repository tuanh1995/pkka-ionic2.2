import { Component } from '@angular/core';
import { NavController} from 'ionic-angular'
import { ReviewOrder} from './review-order'
@Component({
  selector: 'page-other-information',
  templateUrl: 'other-information.html',
})
export class OtherInformation {

  constructor(public navCtrl: NavController) {
  }
  reviewOrder(){
    this.navCtrl.push(ReviewOrder);
  }
}
