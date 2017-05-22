import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { Order } from '../order/order'
import { OrderDetail } from '../order/order-detail'
@Component({
  selector: 'page-review-order',
  templateUrl: 'review-order.html',
})
export class ReviewOrder {

  constructor(public navCtrl: NavController,public alerCtrl: AlertController) {
  }

   completeOrder() {
    let confirm = this.alerCtrl.create({
      title: 'Order Completed',
      message: 'Your order is submitted successfully! You can view the details of the order or back to order list.',
      buttons: [
        {
          text: 'View Detail',
          handler: () => {
            this.navCtrl.push(OrderDetail, {order: {
            id: "P0001",
            order_date: new Date(2017, 4, 30),
            customer: "John Smiths",
            salesman: "J.Doe",
            price: 1200,
            status: "Open" }
            });
          }
        },
        {
          text: 'Order List',
          handler: () => {
            this.navCtrl.push(Order);
          }
        }
      ]
    });
    confirm.present()
  }

}
