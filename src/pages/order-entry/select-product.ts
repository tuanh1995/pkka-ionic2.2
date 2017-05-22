import { Component } from '@angular/core'
import { NavController, ModalController } from 'ionic-angular'
import { FilterProductModal } from './filter-products-modal'
import { ApplyPromotion } from './apply-promotion'
@Component({
  selector: 'page-select-product',
  templateUrl: 'select-product.html'
})
export class SelectProduct {

  showDetail1:Boolean = false;
  showDetail2:Boolean = false;
  showDetail3:Boolean = false;
  showDetail4:Boolean = false;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  openFilters(){
  	let modal = this.modalCtrl.create(FilterProductModal);
    modal.present();
  }
  applyPromotion(){
  	this.navCtrl.push(ApplyPromotion);
  }

}
