import { Component } from '@angular/core'
import { NavController,ModalController } from 'ionic-angular'

import { CustomerAdvanceSearch } from '../customer-search/customer-search'
import { CustomerDetail } from '../customer-detail/customer-detail'
@Component({
  selector: 'page-customer-list',
  templateUrl: 'customer-list.html'
})
export class CustomerList {

  constructor(public navCtrl: NavController,
  	 		public modalCtrl: ModalController) {
  }

  itemsB = [
  	{company_name : 'BreadTalk',code:'ABC0213232 ',contact_name:'Alan Wong',email:'alan.wong@breadtalk.com.sg',phone : '(65) 6285 6116',price_group:'GOLD',catalog:'INST'},
  	{company_name : 'Basilico',code:'ABC0213299',contact_name:'ChrKimis Kim',email:'chris.kim@basilico.com.sg',phone : '(65)6285 2321',price_group:'SILVER',catalog:'MOP'},
    {company_name : 'T Bag',code:'ABC0213599',contact_name:'Micheal Thai',email:'micheal.thai@tbag.com.sg',phone : '(65)6285 2321',price_group:'SILVER',catalog:'MOP'}
  ];
  itemsR = [
    {company_name : 'Rhubarb',code:'ABC0223232 ',contact_name:'Bren Chong',email:'bren.chong@rhubarb.com.sg ',phone : '(65) 6285 2345',price_group:'GOLD',catalog:'CVS'},
    {company_name : 'Ricky',code:'ABC02232344',contact_name:'Ricky Chan',email:'Ricky.chan@ricky.com.sg ',phone : '(65) 6285 2345',price_group:'GOLD',catalog:'CVS'}
  ];
  itemsP = [
    {company_name : 'Ramen Play',code:'ABC0213222 ',contact_name:'Denis Ng',email:'denise.ng@ramen.com.sg',phone : '(65) 6285 7231',price_group:'SILVER',catalog:'OFF'},
    {company_name : 'Puck Pank',code:'ABC0213223 ',contact_name:'Dannis Ng',email:'dannis.ng@puck.com.sg',phone : '(65) 6285 7231',price_group:'SILVER',catalog:'OFF'},
  ];
  itemsF = [
    {company_name : 'Din Tai Fung',code:'ABC0213266 ',contact_name:'Michel Tan',email:'michel.tan@dintaifung.com.sg ',phone : '(65) 6285 3339',price_group:'GOLD',catalog:'TOP'}
  ];

  	openAdvanceSearch() {
  		let modal = this.modalCtrl.create(CustomerAdvanceSearch);
    	modal.present();
  	} 
    itemSelected(item: any){
      this.navCtrl.push(CustomerDetail, { item: item });
    } 
}