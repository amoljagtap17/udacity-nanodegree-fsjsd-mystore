import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];

  constructor() {}

  addProductToCart(product: Product): void {
    this.cart.push(product);
  }

  getCartProducts(): Product[] {
    return this.cart;
  }
}
