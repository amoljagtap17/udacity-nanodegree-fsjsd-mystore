import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProducts: Product[] = [];
  cartTotal: number = 0;

  constructor(private cartService: CartService) {}

  updateCartTotal(): void {
    this.cartTotal = this.cartProducts.reduce(
      (acc, obj) => acc + obj.quantity * obj.price,
      0
    );
  }

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCartProducts();

    this.updateCartTotal();
  }

  updateQuantity(product: Product): void {
    this.cartProducts = this.cartProducts.map((item) =>
      item.id === product.id ? product : item
    );

    this.cartProducts = this.cartProducts.filter((item) => item.quantity > 0);

    this.updateCartTotal();
  }
}
