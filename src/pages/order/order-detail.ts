import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SelectProduct } from '../order-entry/select-product';

@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html'
})

export class OrderDetail{
	order: any;
	segment: string = "information";
  constructor(public params: NavParams, public navCtrl: NavController) {
  	this.order = this.params.get('order');
  }

  editOrder(event) {
  	this.navCtrl.push(SelectProduct);
  }
}
