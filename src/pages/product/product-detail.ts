import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html'
})
export class ProductDetail {

  item: any;

  constructor(public params: NavParams) {
    this.item = this.params.get('item');
  }

  ngOnInit() {

  }

}
