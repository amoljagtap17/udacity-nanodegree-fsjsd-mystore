import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];
  amount: number = 0;

  constructor() {}

  addProductToCart(product: Product): void {
    this.cart = this.cart.filter((item) => item.id !== product.id);

    this.cart.push(product);

    this.amount = this.cart.reduce((acc, obj) => obj.quantity * obj.price, 0);
  }
}
