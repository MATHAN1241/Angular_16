import { Component, Input } from '@angular/core';
import { Product } from '../product-list/product/product';
import { ProductList } from '../product-list/product-list';
import { Products } from '../../Models/Products';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-detail',
  imports: [FormsModule,CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  // Product:Product;

  @Input() productListComp: ProductList =undefined;
  
  product:Products;

  ngOnInit(){
    this.product= this.productListComp.selectedProduct;
  }
}
