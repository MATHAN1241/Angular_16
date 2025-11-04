import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
 //Product as prod

  @Input()
  prod: {
    id: number,
    name: string,
    description: string,
    brand: string,
    gender: string,
    category: string,
    size: number[],
    color: string[],
    price: number,
    discount_price?: number,
    is_in_inventory: boolean,
    items_left: number,
    imageURL: string,
    slug: string
  };


}
