import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartproducts: Product[] = [];
  cartTotal: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartproducts = this.cartService.getCartProducts();

    this.cartTotal = this.cartproducts.reduce(
      (acc, obj) => acc + obj.quantity * obj.price,
      0
    );
  }
}
