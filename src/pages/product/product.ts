import { Component } from '@angular/core';
import { ProductDetail } from './product-detail';
import { ProductSearch } from './product-search';
import { NavController, ModalController } from 'ionic-angular'

@Component({
    selector: 'page-product',
    templateUrl: 'product.html'
})
export class Product {

    products: any[];
    searchQuery: string = '';
    searchInput: string = '';

    constructor(public nav: NavController, public modalCtrl: ModalController) { }

    ngOnInit() {
        this.products = [
            { id: "P0001", name: "Jasmine Green Tea 250ML Plus", group: "Tea", stock_on_hand: 23, uom: "1500ml", price: 1.5, avail_stock: 1500, avail_date: new Date(2017, 1, 24) },
            { id: "P0002", name: "Jasmine Blue Tea 200ML", group: "Tea", stock_on_hand: 23, uom: "1500ml", price: 4.5, avail_stock: 1025, avail_date: new Date(2017, 1, 24) },
            { id: "P0003", name: "Jasmine Red Tea 300ML", group: "Tea", stock_on_hand: 23, uom: "1500ml", price: 3.9, avail_stock: 150, avail_date: new Date(2017, 1, 24) },
            { id: "P0004", name: "Green Coffee 4.5L", group: "Tea", stock_on_hand: 23, uom: "1500ml", price: 1.5, avail_stock: 1500, avail_date: new Date(2017, 1, 24) },
            { id: "P0005", name: "Jasmine Blue Coffee 5.5L", group: "Tea", stock_on_hand: 23, uom: "1500ml", price: 2.5, avail_stock: 750, avail_date: new Date(2017, 1, 24) },
            { id: "P0006", name: "Red Coffee 6.5L", group: "Tea", stock_on_hand: 23, uom: "1500ml", price: 1.5, avail_stock: 600, avail_date: new Date(2017, 1, 24) },
            { id: "P0007", name: "Green Food 7.5L", group: "Tea", stock_on_hand: 23, uom: "1500ml", price: 1.5, avail_stock: 1500, avail_date: new Date(2017, 1, 24) },
            { id: "P0008", name: "Jasmine Green Tea 800ML", group: "Tea", stock_on_hand: 23, uom: "1500ml", price: 4.5, avail_stock: 1025, avail_date: new Date(2017, 1, 24) },
            { id: "P0009", name: "Jasmine Gray Food 900ML", group: "Tea", stock_on_hand: 23, uom: "1500ml", price: 3.9, avail_stock: 150, avail_date: new Date(2017, 1, 24) },
            { id: "P00010", name: "Jasmine Red Tea 10.5L", group: "Tea", stock_on_hand: 23, uom: "1500ml", price: 1.5, avail_stock: 1500, avail_date: new Date(2017, 1, 24) },
            { id: "P00011", name: "Jasmine Red Milk 11.5L", group: "Tea", stock_on_hand: 23, uom: "1500ml", price: 2.5, avail_stock: 750, avail_date: new Date(2017, 1, 24) },
            { id: "P00012", name: "Jasmine Blue Milk 21.5L", group: "Tea", stock_on_hand: 23, uom: "1500ml", price: 1.5, avail_stock: 600, avail_date: new Date(2017, 1, 24) },
            { id: "P00013", name: "Jasmine Green Milk 13.5L", group: "Tea", stock_on_hand: 23, uom: "1500ml", price: 1.5, avail_stock: 1500, avail_date: new Date(2017, 1, 24) },
            { id: "P00014", name: "Alpha Milk 140ML", group: "Tea", stock_on_hand: 23, uom: "1500ml", price: 4.5, avail_stock: 1025, avail_date: new Date(2017, 1, 24) },
            { id: "P00015", name: "Beta Tea 150ML", group: "Tea", stock_on_hand: 23, uom: "1500ml", price: 3.9, avail_stock: 150, avail_date: new Date(2017, 1, 24) },
            { id: "P00016", name: "Jasmine Green Tea 1.65L", group: "Tea", stock_on_hand: 23, uom: "1500ml", price: 1.5, avail_stock: 1500, avail_date: new Date(2017, 1, 24) },
            { id: "P00017", name: "Jasmine Green Tea 1.73L", group: "Tea", stock_on_hand: 23, uom: "1500ml", price: 2.5, avail_stock: 750, avail_date: new Date(2017, 1, 24) },
            { id: "P00018", name: "Jasmine Green Tea 1.84L", group: "Tea", stock_on_hand: 23, uom: "1500ml", price: 1.5, avail_stock: 600, avail_date: new Date(2017, 1, 24) },
        ];
    }

    view(item: any) {
        this.nav.push(ProductDetail, { item: item });
    }

    search() {
        let modal = this.modalCtrl.create(ProductSearch);
        modal.present();
        modal.onDidDismiss(data => {
            console.log(data);
        });
    }

}
