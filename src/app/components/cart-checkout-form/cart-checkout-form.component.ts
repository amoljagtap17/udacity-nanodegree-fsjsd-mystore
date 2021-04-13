import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-checkout-form',
  templateUrl: './cart-checkout-form.component.html',
  styleUrls: ['./cart-checkout-form.component.css'],
})
export class CartCheckoutFormComponent implements OnInit {
  fullName: string;
  address: string;
  card: string;
  errors: { card: string };

  @Output() updateCheckout: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.fullName = '';
    this.address = '';
    this.card = '';
    this.errors = {
      card: '',
    };
  }

  ngOnInit(): void {}

  submitForm(): void {
    const checkOutData = {
      fullName: this.fullName,
      address: this.address,
      card: this.card,
    };

    if (!Number(this.card)) {
      this.errors.card = 'Please provide a valid 16 digit number.';
      return;
    }

    this.updateCheckout.emit(checkOutData);

    this.fullName = '';
    this.address = '';
    this.card = '';
    this.errors = {
      card: '',
    };
  }
}
