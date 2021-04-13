import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // this.products = (data as any).default;

    this.cartService.getProducts().subscribe((res) => {
      for (let index = 0; index < res.length; index++) {
        const product = res[index];
        product['quantity'] = 1;
      }

      this.products = res;
    });
  }
}
