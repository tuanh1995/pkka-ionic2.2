import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filterPromotion'
})
export class FilterPromotionPipe implements PipeTransform {
	transform(promotions: any, keyword: string): any {
		if (keyword) {
			promotions = promotions.filter((promotion) => {
				return promotion.id.toLowerCase().indexOf(keyword.toString().toLowerCase()) !== -1
				|| promotion.title.toLowerCase().indexOf(keyword.toString().toLowerCase()) !== -1
			});
			return promotions;
		} else {
			return promotions;
		}
	}
}