import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Bonus } from './bonus/bonus';
import { Condition } from './condition/condition';
import { Information } from './information/information';

@Component({
	selector: 'page-promotion-detail',
	templateUrl: 'promotion-detail.html'
})
export class PromotionDetail {

	item: any;
	tabSelected : string = 'information';

	constructor(public params: NavParams) {
		this.item = this.params.get('item');
	}

	ngOnInit() {

	}

}
