import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events, ModalController } from 'ionic-angular';
import { OrderDetail } from './order-detail';
import { OrderSearch } from './order-search';
import { OrderEntry } from '../order-entry/order-entry';

@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class Order {
  orders: any[];
  searchInput: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, public ionicEvents: Events) {
  }
  ngOnInit() {
    this.orders= [
        { id: "P0001", order_date: new Date(2017, 4, 30), customer: "John Smiths", salesman: "J.Doe", price: 1200, status: "Open" },
        { id: "P0002", order_date: new Date(2017, 4, 31), customer: "John Smiths", salesman: "J.Doe", price: 1000, status: "Shipped" },
        { id: "P0003", order_date: new Date(2017, 4, 23), customer: "Peter", salesman: "J.Doe", price: 1400, status: "Hold" },
        { id: "P0004", order_date: new Date(2017, 4, 6), customer: "Smiths", salesman: "J.Doe", price: 1340, status: "Open" },
        { id: "P0005", order_date: new Date(2017, 4, 3), customer: "water", salesman: "J.Doe", price: 1700, status: "Submitted" },
        { id: "P0006", order_date: new Date(2017, 4, 13), customer: "John Smiths", salesman: "J.Doe", price: 2200, status: "Closed" },
    ];
  }
  viewOrder(order: any) {
    this.navCtrl.push(OrderDetail, { order: order });
  }
  search() {
    let modal = this.modalCtrl.create(OrderSearch);
    modal.present();

  }

  addOrder() {
    this.navCtrl.push(OrderEntry);
  }

  // dismiss() {
  //   this.viewCtrl.dismiss();
  // }

  // selectCustomer(id:string) {
  // 	this.viewCtrl.dismiss();
  // 	this.ionicEvents.publish('orderEntry:viewCustomer', id);
  // }
}
