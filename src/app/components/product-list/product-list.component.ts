import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import * as data from '../../../assets/data.json';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor() {}

  ngOnInit(): void {
    this.products = (data as any).default;
  }
}
