import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-checkout-form',
  templateUrl: './cart-checkout-form.component.html',
  styleUrls: ['./cart-checkout-form.component.css'],
})
export class CartCheckoutFormComponent implements OnInit {
  fullName: string = '';
  address: string = '';
  card: string = '';

  constructor() {}

  ngOnInit(): void {}

  submitForm(): void {
    const checkoutData = {
      fullName: this.fullName,
      address: this.address,
      card: this.card,
    };

    this.fullName = '';
    this.address = '';
    this.card = '';
  }
}
