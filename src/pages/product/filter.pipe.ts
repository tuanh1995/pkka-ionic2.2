import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filter'
})
export class FilterPipe implements PipeTransform {
	transform(products: any, keyword: string): any {
		if (keyword) {
			products = products.filter((product) => {
				return product.id.toLowerCase().indexOf(keyword.toString().toLowerCase()) !== -1
				|| product.name.toLowerCase().indexOf(keyword.toString().toLowerCase()) !== -1
			});
			return products;
		} else {
			return products;
		}
	}
}