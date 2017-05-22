import { Component } from '@angular/core';
import { PromotionSearch } from './promotion-search';
import { PromotionDetail } from './promotion-detail';
import { IonicPage, NavController, ModalController } from 'ionic-angular'

@Component({
  selector: 'page-promotion',
  templateUrl: 'promotion.html'
})
export class Promotion {

  promotions: any[];
  searchInput: string = '';

  constructor(public nav: NavController, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.promotions = [
      { id: "C00012", title: "Lower price due to happy day", type: "Promotion Price", price_group: "Tea", customer: "All", valid_from: new Date(2017, 11, 11), valid_to: new Date(2017, 11, 11), status: true },
      { id: "C00013", title: "Lower price due to happy new year", type: "Promotion Price", price_group: "Milk", customer: "All", valid_from: new Date(2017, 11, 11), valid_to: new Date(2017, 11, 11), status: false },
      { id: "C00014", title: "Lower price due to happy birthday", type: "Promotion Price", price_group: "Coffee", customer: "All", valid_from: new Date(2017, 11, 11), valid_to: new Date(2017, 11, 11), status: true },
      { id: "C00015", title: "Lower price due to happy holiday", type: "Promotion Price", price_group: "Tea", customer: "All", valid_from: new Date(2017, 11, 11), valid_to: new Date(2017, 11, 11), status: false },
      { id: "C00016", title: "Lower price due to merry chirstmast", type: "Promotion Price", price_group: "Milk", customer: "All", valid_from: new Date(2017, 11, 11), valid_to: new Date(2017, 11, 11), status: true },
      { id: "C00017", title: "Lower price due to happy tet holiday", type: "Promotion Price", price_group: "Coffee", customer: "All", valid_from: new Date(2017, 11, 11), valid_to: new Date(2017, 11, 11), status: true },
      { id: "C00018", title: "Lower price due to happy day", type: "Promotion Price", price_group: "Tea", customer: "All", valid_from: new Date(2017, 11, 11), valid_to: new Date(2017, 11, 11), status: false },
      { id: "C00019", title: "Lower price due to happy day", type: "Promotion Price", price_group: "Milk", customer: "All", valid_from: new Date(2017, 11, 11), valid_to: new Date(2017, 11, 11), status: true },
      { id: "C00020", title: "Lower price due to happy day", type: "Promotion Price", price_group: "Coffee", customer: "All", valid_from: new Date(2017, 11, 11), valid_to: new Date(2017, 11, 11), status: false },
      { id: "C00021", title: "Lower price due to happy day", type: "Promotion Price", price_group: "Tea", customer: "All", valid_from: new Date(2017, 11, 11), valid_to: new Date(2017, 11, 11), status: true },
      { id: "C00022", title: "Lower price due to happy day", type: "Promotion Price", price_group: "Milk", customer: "All", valid_from: new Date(2017, 11, 11), valid_to: new Date(2017, 11, 11), status: true },
    ];
  }

  view(item: any) {
    this.nav.push(PromotionDetail, { item: item });
  }

  search() {
    let modal = this.modalCtrl.create(PromotionSearch);
    modal.present();
  }


}
