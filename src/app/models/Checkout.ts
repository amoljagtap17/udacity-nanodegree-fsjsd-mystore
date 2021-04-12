export class Checkout {
  fullName: string;
  address: string;
  card: string;
  amount: number;

  constructor() {
    this.fullName = '';
    this.address = '';
    this.card = '';
    this.amount = 0;
  }
}
