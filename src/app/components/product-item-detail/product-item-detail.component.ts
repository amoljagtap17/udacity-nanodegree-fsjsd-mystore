import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  id: number = 0;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.product = {
      id: 0,
      name: '',
      price: 0.0,
      url: '',
      description: '',
      quantity: 0,
    };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!;

      this.productService.getProducts().subscribe((res) => {
        const products: Product[] = res;

        this.product = products.filter((product) => product.id === this.id)[0];
      });
    });
  }
}
