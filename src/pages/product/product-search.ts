import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
	selector: 'page-product-search',
	templateUrl: 'product-search.html'
})
export class ProductSearch {

	product : any = {};

	constructor(public viewCtrl: ViewController) { }

	ngOnInit() {

	}

	dismiss() {
		this.viewCtrl.dismiss(-1);
	}

	search() {
		this.viewCtrl.dismiss(this.product);
	}

}
