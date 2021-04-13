import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data.json');
  }

  addProductToCart(product: Product): void {
    const productExistsInCart =
      this.cart.filter((item) => item.id === product.id).length > 0;

    if (productExistsInCart) {
      alert(
        `Product ${product.name} already exists in cart. Updating the quantity to ${product.quantity}.`
      );

      this.cart = this.cart.map((item) =>
        item.id === product.id ? product : item
      );
    } else {
      this.cart.push(product);

      alert(`Added ${product.quantity} of ${product.name} to cart!`);
    }
  }

  getCartProducts(): Product[] {
    return this.cart;
  }

  resetCart(): void {
    this.cart = [];
  }

  updateQuantity(product: Product): Product[] {
    this.cart = this.cart.map((item) =>
      item.id === product.id ? product : item
    );

    this.cart = this.cart.filter((item) => item.quantity > 0);

    return this.cart;
  }
}
