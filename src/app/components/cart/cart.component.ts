import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { Checkout } from '../../models/Checkout';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProducts: Product[] = [];
  cartTotal: number = 0;
  showSuccessPage: boolean = false;
  checkOutData: Checkout;

  constructor(private cartService: CartService) {
    this.checkOutData = {
      fullName: '',
      address: '',
      card: '',
      amount: 0,
    };
  }

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
    this.cartProducts = this.cartService.updateQuantity(product);

    this.updateCartTotal();
  }

  updateCheckout(checkOutData: Checkout): void {
    this.checkOutData = { ...checkOutData, amount: this.cartTotal };
    this.showSuccessPage = true;
    this.cartProducts = [];
    this.cartService.resetCart();
  }
}
