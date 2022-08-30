import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(private cart: CartService, private route: ActivatedRoute) {}

  product: Product = { id: 1, name: '', price: 1, description: '' };
  addToCart(product: Product) {
    this.cart.addToCart(product);
    alert('Your product has been added to the cart!');
  }

  ngOnInit(): void {}
}
