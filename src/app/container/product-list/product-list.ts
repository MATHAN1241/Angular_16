import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from './product/product';
import { Filter } from './filter/filter';

@Component({
  selector: 'product-list',
  imports: [CommonModule,Product,Filter],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  index:number=0;
 products=[

  {
    "id": 2,
    "name": "Nike Air Max 270",
    "description": "Experience ultimate comfort with Nike Air Max 270 featuring the tallest Max Air unit yet for all-day wear.",
    "brand": "NIKE",
    "gender": "MEN",
    "category": "LIFESTYLE",
    "size": [7, 8, 9, 10, 11],
    "color": ["Black", "White", "Red"],
    "price": 150,
     "discount_price": 130,
    "is_in_inventory": true,
    "items_left": 8,
    "imageURL": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    "slug": "nike-air-max-270"
  },
  {
    "id": 3,
    "name": "Adidas Ultraboost 22",
    "description": "Boost your running performance with Adidas Ultraboost 22 featuring responsive cushioning and primeknit upper.",
    "brand": "ADIDAS",
    "gender": "MEN",
    "category": "RUNNING",
    "size": [8, 9, 10, 11],
    "color": ["Black", "Blue", "White"],
    "price": 180,
    "discount_price": 160,
    "is_in_inventory": true,
    "items_left": 6,
    "imageURL": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500",
    "slug": "adidas-ultraboost-22"
  },
  {
    "id": 4,
    "name": "Puma RS-X Retro",
    "description": "Retro-inspired Puma RS-X with bold designs and comfortable cushioning for urban lifestyle wear.",
    "brand": "PUMA",
    "gender": "MEN",
    "category": "LIFESTYLE",
    "size": [7, 8, 9, 10],
    "color": ["Blue", "Red", "White"],
    "price": 110,
    "is_in_inventory": true,
    "items_left": 12,
    "imageURL": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500",
    "slug": "puma-rs-x-retro"
  },
  {
    "id": 5,
    "name": "New Balance 574 Classic",
    "description": "Classic heritage style meets modern comfort in the iconic New Balance 574 sneakers.",
    "brand": "NEW BALANCE",
    "gender": "UNISEX",
    "category": "CASUAL",
    "size": [6, 7, 8, 9, 10, 11],
    "color": ["Gray", "Navy", "Green"],
    "price": 85,
    "is_in_inventory": true,
    "items_left": 15,
    "imageURL": "https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=500",
    "slug": "new-balance-574-classic"
  },
  {
    "id": 6,
    "name": "Converse Chuck Taylor All Star",
    "description": "The timeless classic canvas sneaker that has been a cultural icon for decades.",
    "brand": "CONVERSE",
    "gender": "UNISEX",
    "category": "CASUAL",
    "size": [6, 7, 8, 9, 10, 11],
    "color": ["Black", "White", "Red"],
    "price": 55,
    "discount_price": 45,
    "is_in_inventory": true,
    "items_left": 25,
    "imageURL": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
    "slug": "converse-chuck-taylor-all-star"
  },
  {
    "id": 7,
    "name": "Nike Jordan 1 Retro High",
    "description": "Iconic basketball sneakers that revolutionized the game and streetwear culture.",
    "brand": "NIKE",
    "gender": "MEN",
    "category": "BASKETBALL",
    "size": [8, 9, 10, 11, 12],
    "color": ["Red", "Black", "White"],
    "price": 170,
    "discount_price": 150,
    "is_in_inventory": false,
    "items_left": 0,
    "imageURL": "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500",
    "slug": "nike-jordan-1-retro-high"
  },
  {
    "id": 8,
    "name": "Adidas NMD_R1",
    "description": "Modern lifestyle sneakers with Boost cushioning and contemporary urban design.",
    "brand": "ADIDAS",
    "gender": "MEN",
    "category": "LIFESTYLE",
    "size": [7, 8, 9, 10, 11],
    "color": ["Black", "White", "Gray"],
    "price": 130,
    "is_in_inventory": true,
    "items_left": 9,
    "imageURL": "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=500",
    "slug": "adidas-nmd-r1"
  },
  {
    "id": 9,
    "name": "Vans Old Skool",
    "description": "Classic skate shoes featuring the iconic side stripe and durable canvas construction.",
    "brand": "VANS",
    "gender": "UNISEX",
    "category": "SKATE",
    "size": [6, 7, 8, 9, 10, 11],
    "color": ["Black", "White", "Blue"],
    "price": 60,
    "is_in_inventory": true,
    "items_left": 18,
    "imageURL": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
    "slug": "vans-old-skool"
  },
  {
    "id": 10,
    "name": "Nike Air Force 1",
    "description": "The classic white-on-white basketball sneaker that became a streetwear essential.",
    "brand": "NIKE",
    "gender": "MEN",
    "category": "BASKETBALL",
    "size": [7, 8, 9, 10, 11, 12],
    "color": ["White", "Black"],
    "price": 100,
    "discount_price": 90,
    "is_in_inventory": false,
    "items_left": 14,
    "imageURL": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
    "slug": "nike-air-force-1"
  },
  {
    "id": 11,
    "name": "Reebok Classic Leather",
    "description": "Timeless leather sneakers offering premium comfort and versatile style.",
    "brand": "REEBOK",
    "gender": "UNISEX",
    "category": "CASUAL",
    "size": [6, 7, 8, 9, 10, 11],
    "color": ["White", "Black", "Navy"],
    "price": 75,
    "discount_price": 65,
    "is_in_inventory": true,
    "items_left": 11,
    "imageURL": "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500",
    "slug": "reebok-classic-leather"
  },
  {
    "id": 12,
    "name": "Nike Blazer Mid",
    "description": "Vintage-inspired basketball sneakers with retro styling and modern comfort.",
    "brand": "NIKE",
    "gender": "MEN",
    "category": "BASKETBALL",
    "size": [8, 9, 10, 11],
    "color": ["White", "Black", "Red"],
    "price": 100,
    "is_in_inventory": true,
    "items_left": 7,
    "imageURL": "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500",
    "slug": "nike-blazer-mid"
  },
  {
    "id": 13,
    "name": "Adidas Superstar",
    "description": "Iconic shell-toe sneakers that defined a generation of style and culture.",
    "brand": "ADIDAS",
    "gender": "UNISEX",
    "category": "CASUAL",
    "size": [6, 7, 8, 9, 10, 11],
    "color": ["White", "Black", "Gold"],
    "price": 80,
    "discount_price": 70,
    "is_in_inventory": true,
    "items_left": 20,
    "imageURL": "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500",
    "slug": "adidas-superstar"
  },
  {
    "id": 14,
    "name": "Nike Dunk Low",
    "description": "Skate-inspired sneakers with premium materials and classic color blocking.",
    "brand": "NIKE",
    "gender": "MEN",
    "category": "SKATE",
    "size": [8, 9, 10, 11],
    "color": ["Black", "White", "Pink"],
    "price": 110,
    "is_in_inventory": false,
    "items_left": 5,
    "imageURL": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500",
    "slug": "nike-dunk-low"
  },
  {
    "id": 15,
    "name": "Puma Cali Sport",
    "description": "Modern take on vintage tennis shoes with soft leather and retro appeal.",
    "brand": "PUMA",
    "gender": "WOMEN",
    "category": "LIFESTYLE",
    "size": [5, 6, 7, 8, 9],
    "color": ["White", "Pink", "Black"],
    "price": 90,
    "discount_price": 80,
    "is_in_inventory": true,
    "items_left": 13,
    "imageURL": "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500",
    "slug": "puma-cali-sport"
  },
  {
    "id": 16,
    "name": "New Balance 990v5",
    "description": "Premium running shoes made in USA with exceptional comfort and durability.",
    "brand": "NEW BALANCE",
    "gender": "MEN",
    "category": "RUNNING",
    "size": [8, 9, 10, 11, 12],
    "color": ["Gray", "Navy", "Black"],
    "price": 175,
    "is_in_inventory": true,
    "items_left": 4,
    "imageURL": "https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=500",
    "slug": "new-balance-990v5"
  },
  {
    "id": 17,
    "name": "Nike Metcon 7",
    "description": "High-performance training shoes designed for cross-training and weightlifting.",
    "brand": "NIKE",
    "gender": "MEN",
    "category": "TRAINING",
    "size": [8, 9, 10, 11, 12],
    "color": ["Black", "Red", "Blue"],
    "price": 130,
    "is_in_inventory": true,
    "items_left": 8,
    "imageURL": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    "slug": "nike-metcon-7"
  },
  {
    "id": 18,
    "name": "Adidas Stan Smith",
    "description": "Minimalist tennis shoes with clean leather upper and iconic green heel tab.",
    "brand": "ADIDAS",
    "gender": "UNISEX",
    "category": "TENNIS",
    "size": [6, 7, 8, 9, 10, 11],
    "color": ["White", "Green", "Blue"],
    "price": 85,
    "discount_price": 75,
    "is_in_inventory": true,
    "items_left": 16,
    "imageURL": "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500",
    "slug": "adidas-stan-smith"
  },
  {
    "id": 19,
    "name": "Nike Air Max 97",
    "description": "Revolutionary sneakers with full-length Air Max unit and wave-inspired design.",
    "brand": "NIKE",
    "gender": "MEN",
    "category": "LIFESTYLE",
    "size": [7, 8, 9, 10, 11],
    "color": ["Silver", "Black", "Red"],
    "price": 170,
    "is_in_inventory": false,
    "items_left": 0,
    "imageURL": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
    "slug": "nike-air-max-97"
  },
  {
    "id": 20,
    "name": "Asics Gel-Kayano 28",
    "description": "Premium stability running shoes with advanced cushioning and support systems.",
    "brand": "ASICS",
    "gender": "MEN",
    "category": "RUNNING",
    "size": [8, 9, 10, 11, 12],
    "color": ["Blue", "Black", "Silver"],
    "price": 160,
    "is_in_inventory": true,
    "items_left": 6,
    "imageURL": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
    "slug": "asics-gel-kayano-28"
  },
  {
    "id": 21,
    "name": "Nike Air Max 90",
    "description": "Classic Air Max model with visible air cushioning and durable construction.",
    "brand": "NIKE",
    "gender": "MEN",
    "category": "LIFESTYLE",
    "size": [7, 8, 9, 10, 11],
    "color": ["Black", "White", "Red"],
    "price": 120,
    "is_in_inventory": true,
    "items_left": 10,
    "imageURL": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    "slug": "nike-air-max-90"
  },
  {
    "id": 22,
    "name": "Adidas Gazelle",
    "description": "Iconic suede sneakers with timeless design and comfortable fit.",
    "brand": "ADIDAS",
    "gender": "UNISEX",
    "category": "CASUAL",
    "size": [6, 7, 8, 9, 10, 11],
    "color": ["Blue", "Black", "Pink"],
    "price": 85,
    "is_in_inventory": false,
    "items_left": 14,
    "imageURL": "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=500",
    "slug": "adidas-gazelle"
  },
  {
    "id": 23,
    "name": "Nike Cortez",
    "description": "The original running shoe from 1972 with classic nylon and leather construction.",
    "brand": "NIKE",
    "gender": "UNISEX",
    "category": "RUNNING",
    "size": [6, 7, 8, 9, 10, 11],
    "color": ["Red", "Blue", "Black"],
    "price": 75,
    "discount_price": 65,
    "is_in_inventory": true,
    "items_left": 19,
    "imageURL": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
    "slug": "nike-cortez"
  }
  
 ];

   totalProductCount=this.products.length;
   totalInStockCount= this.products.filter(p=> p.is_in_inventory===true).length;
   totalOutStockCount= this.products.filter(p=>p.is_in_inventory===false).length;

   selectFilterRadio: string='all';

   onFilterChanged(value:string){
     console.log(value);
     this.selectFilterRadio= value;
   }

   @Input()
   searchText: string='';

}
