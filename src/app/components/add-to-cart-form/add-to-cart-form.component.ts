import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-add-to-cart-form',
  templateUrl: './add-to-cart-form.component.html',
  styleUrls: ['./add-to-cart-form.component.css'],
})
export class AddToCartFormComponent implements OnInit {
  @Input() product: Product;

  quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  quantity: number = 1;

  constructor(private cartService: CartService) {
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
    alert(`Added ${this.product.quantity} of ${this.product.name} to cart!`);

    this.cartService.addProductToCart(this.product);
  }
}
