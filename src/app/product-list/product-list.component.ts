import { Component, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor() {}

  products = products;

  ngOnInit(): void {}

  share() {
    alert('You have shared an item!');
  }

  onNotify() {
    alert('you subscribed to be notified on this product.');
  }
}
