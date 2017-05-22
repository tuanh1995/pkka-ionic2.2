import { Component, OnInit } from '@angular/core'
import { NavController, ModalController,Platform ,NavParams } from 'ionic-angular'


import {OrderDetail} from '../../order/order-detail'
@Component({
  selector: 'customer-detail',
  templateUrl: 'customer-detail.html'
})
export class CustomerDetail implements OnInit {

	detail: string = "information";
  	isAndroid: boolean = false;
  	item: any;
    orders: any[];
  constructor(platform: Platform,public navCtrl: NavController,public params: NavParams) {
    this.isAndroid = platform.is('android');
    this.item = this.params.get('item');
  }
  ngOnInit() {
    this.orders= [
        { id: "P0001", order_date: new Date(2017, 4, 30), customer: "John Smiths", salesman: "J.Doe", price: 1200, status: "Open", code: "INV00000212" },
        { id: "P0002", order_date: new Date(2017, 4, 31), customer: "John Smiths", salesman: "J.Doe", price: 1000, status: "Shipped", code: "INV00000242" },
        { id: "P0003", order_date: new Date(2017, 4, 23), customer: "Peter", salesman: "J.Doe", price: 1400, status: "Hold", code: "INV00000265" },
        { id: "P0004", order_date: new Date(2017, 4, 6), customer: "Smiths", salesman: "J.Doe", price: 1340, status: "Open", code: "INV00000210" },
        { id: "P0005", order_date: new Date(2017, 4, 3), customer: "water", salesman: "J.Doe", price: 1700, status: "Submitted", code: "INV00000292" },
        { id: "P0006", order_date: new Date(2017, 4, 13), customer: "John Smiths", salesman: "J.Doe", price: 2200, status: "Closed", code: "INV00000412" },
    ];
  }
  orderSelected(order :any){
    this.navCtrl.push(OrderDetail, { order: order });
    // console.log(orderdetail);
  }
}
