import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Login } from '../pages/login/login';
import { OrderEntry } from '../pages/order-entry/order-entry';
import { Order } from '../pages/order/order';

import { ShippingAddressModal } from '../pages/order-entry/shipping-address-modal';
import { Product } from '../pages/product/product';
import { ProductSearch } from '../pages/product/product-search';
import { Promotion } from '../pages/promotion/promotion';
import { CustomerList } from '../pages/customer/customer-list/customer-list';
import { ViewCustomer } from '../pages/order-entry/view-customer';
import { SelectProduct } from '../pages/order-entry/select-product';
import { ReviewOrder } from '../pages/order-entry/review-order';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = Login;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public ionicEvents: Events) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [

      { title: 'Customer', component: CustomerList },
      { title: 'Product', component: Product },
      { title: 'Order', component: Order },
      { title: 'Promotion', component: Promotion },
      { title: 'Add Order', component: OrderEntry }
    ];

    ionicEvents.subscribe('orderEntry:viewCustomer', (id) => {
      this.nav.push(ViewCustomer);
      
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component);


    switch(page) { 
      case 'CustomerList': { 
        this.nav.setRoot(CustomerList);
        break; 
      } 
      case 'Product': { 
        this.nav.setRoot(Product);
        break; 
      } 
      case 'Order': { 
        this.nav.setRoot(Order);
        break; 
      } 
      case 'Promotion': { 
        this.nav.setRoot(Promotion);
        break; 
      } 
      case 'AddOrder': { 
        this.nav.setRoot(OrderEntry);
        break; 
      }
      case 'MyAccount': { 
        
        break; 
      }
      default: { 
        //statements; 
        break; 
      } 
    } 

  }

  logout(){
    this.nav.setRoot(Login);
  }

}
