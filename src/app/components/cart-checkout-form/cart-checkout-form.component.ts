import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-checkout-form',
  templateUrl: './cart-checkout-form.component.html',
  styleUrls: ['./cart-checkout-form.component.css'],
})
export class CartCheckoutFormComponent implements OnInit {
  fullName: string = '';
  address: string = '';
  card: string = '';

  @Output() updateCheckout: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  submitForm(): void {
    const checkOutData = {
      fullName: this.fullName,
      address: this.address,
      card: this.card,
    };

    this.updateCheckout.emit(checkOutData);

    this.fullName = '';
    this.address = '';
    this.card = '';
  }
}
