import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
	selector: 'page-promotion-search',
	templateUrl: 'promotion-search.html'
})
export class PromotionSearch {

	constructor(public viewCtrl: ViewController) { }

	ngOnInit() {

	}

	dismiss() {
		this.viewCtrl.dismiss();
	}

}
