import { Component } from '@angular/core';
import { Search } from './search/search';
import { CommonModule } from '@angular/common';
import { ProductList } from './product-list/product-list';

@Component({
  selector: 'container',
  imports: [Search,CommonModule,ProductList],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {

  listofString: string[]= ["mathan", "kavi","hello","hoew"];
  // name="Mathan";
  addTocart:number=1;
  product={
    name: 'iPhone X',
    price: 999,
    color: 'RED',
    discount:8.5,
    inStock : 5,
    pImage: "/images/Murugan2.jpg"
  }

  getDiscountPrice(){
    return  this.product.price -(this.product.price * this.product.discount/100 )
  }
  // name: string = "iPhone";
  // price: number = 999;
  // color: string = 'Red';
  // discount: number=9.5;


  onNameChange(event:any){  //Input Event Objects
   // console.log(event.target.value);
    //this.name= event.target.value;
  }
  DecrementCartValue(){
     // this.addTocart-=1;
     if(this.addTocart>0){
     this.addTocart--;
     }
  }
  IncremantCartValue(){
    //   this.addTocart+=1;
    if(this.addTocart< this.product.inStock){
    this.addTocart++;
    }
  }
}
