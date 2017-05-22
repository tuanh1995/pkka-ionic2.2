import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ElasticModule } from 'angular2-elastic';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Login } from '../pages/login/login';
import { AnnouncementModal } from '../pages/announcement-modal/announcement-modal';
import { OrderEntry } from '../pages/order-entry/order-entry';
import { SelectCustomerModal } from '../pages/order-entry/select-customer-modal';
import { ViewCustomer } from '../pages/order-entry/view-customer';


import { Order } from '../pages/order/order';
import { OrderDetail } from './../pages/order/order-detail';

import { ShippingAddressModal } from '../pages/order-entry/shipping-address-modal';
import { AddAddressModal } from '../pages/order-entry/add-address-modal';
import { EditAddressModal } from '../pages/order-entry/edit-address-modal';
import { SelectProduct } from '../pages/order-entry/select-product';

import { Product } from '../pages/product/product';
import { ProductDetail } from '../pages/product/product-detail';
import { ProductSearch } from '../pages/product/product-search';

import { OrderSearch } from './../pages/order/order-search';


import { Promotion } from '../pages/promotion/promotion';
import { PromotionSearch } from '../pages/promotion/promotion-search';
import { PromotionDetail } from '../pages/promotion/promotion-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//customer
import { CustomerList } from '../pages/customer/customer-list/customer-list';
import { CustomerAdvanceSearch } from '../pages/customer/customer-search/customer-search';
import { CustomerDetail } from '../pages/customer/customer-detail/customer-detail';

import { FilterProductModal } from '../pages/order-entry/filter-products-modal'
import { ApplyPromotion } from '../pages/order-entry/apply-promotion'
import { OtherInformation } from '../pages/order-entry/other-information'
import { ReviewOrder } from '../pages/order-entry/review-order'
@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
        Login,
        AnnouncementModal,
        OrderEntry,
        SelectCustomerModal,
        ViewCustomer,
        ShippingAddressModal,
        AddAddressModal,
        EditAddressModal,
        SelectProduct,
        Product,
        ProductDetail,
        ProductSearch,
        Promotion,
        PromotionSearch,
        PromotionDetail,
        OrderSearch,
        Order,
        OrderDetail,
        CustomerList,
        CustomerAdvanceSearch,
        CustomerDetail,
        FilterProductModal,
        ApplyPromotion,
        OtherInformation,
        ReviewOrder
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp, {
            backButtonText: '',
            tabsPlacement: 'top',
            platforms: {
                android: {
                    tabsPlacement: 'top'
                },
                ios: {
                    tabsPlacement: 'top'
                },
                windows:
                {
                    tabsPlacement: 'top'
                }
            }
        }),
        ElasticModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage,
        Login,
        AnnouncementModal,
        OrderEntry,
        SelectCustomerModal,
        ViewCustomer,
        ShippingAddressModal,
        AddAddressModal,
        EditAddressModal,
        SelectProduct,
        Product,
        ProductDetail,
        ProductSearch,
        Promotion,
        PromotionSearch,
        PromotionDetail,
		OrderSearch,
		Order,
        OrderDetail,
        CustomerList,
        CustomerAdvanceSearch,
        CustomerDetail,
        FilterProductModal,
        ApplyPromotion,
        OtherInformation,
        ReviewOrder
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]

})
export class AppModule { }
