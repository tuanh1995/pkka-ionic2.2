import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
	selector: 'page-information',
	templateUrl: 'information.html'
})
export class Information implements OnInit {

	item: any;

	constructor(public params: NavParams) {
		this.item = this.params.data;
	}

	ngOnInit() {
		
	}
}