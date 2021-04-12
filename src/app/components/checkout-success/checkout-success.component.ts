import { Component, OnInit, Input } from '@angular/core';
import { Checkout } from '../../models/Checkout';

@Component({
  selector: 'app-checkout-success',
  templateUrl: './checkout-success.component.html',
  styleUrls: ['./checkout-success.component.css'],
})
export class CheckoutSuccessComponent implements OnInit {
  @Input() checkOutData: Checkout;

  constructor() {
    this.checkOutData = {
      fullName: '',
      address: '',
      card: '',
      amount: 0,
    };
  }

  ngOnInit(): void {}
}
