import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  quantity: number = 1;

  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: 0.0,
      url: '',
      description: '',
      quantity: 0,
    };
  }

  ngOnInit(): void {}

  updateQuantity(value: number): void {
    this.product.quantity = value;
  }

  submitAddToCartForm(): void {
    alert(`Added ${this.product.quantity} of ${this.product.name}`);
  }
}
