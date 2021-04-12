import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];

  constructor() {}

  addProductToCart(product: Product): void {
    const productExistsInCart =
      this.cart.filter((item) => item.id === product.id).length > 0;

    if (productExistsInCart) {
      this.cart = this.cart.map((item) =>
        item.id === product.id ? product : item
      );
    } else {
      this.cart.push(product);
    }
  }

  getCartProducts(): Product[] {
    return this.cart;
  }
}
