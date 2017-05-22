import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';

@Component({
  selector: 'modal-filter-product',
  templateUrl: 'filter-products-modal.html'
})
export class FilterProductModal {

  constructor(public navCtrl: NavController , public navParams: NavParams, public viewCtrl: ViewController) {

  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
