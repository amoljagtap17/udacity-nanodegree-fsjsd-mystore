import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() cartProduct: Product;

  @Output() updateQuantity: EventEmitter<any> = new EventEmitter();

  constructor(private cartService: CartService) {
    this.cartProduct = {
      id: 0,
      name: '',
      price: 0.0,
      url: '',
      description: '',
      quantity: 0,
    };
  }

  ngOnInit(): void {}

  updateCartProductQuantity(value: number): void {
    this.cartProduct.quantity = value;

    this.updateQuantity.emit(this.cartProduct);
  }
}
