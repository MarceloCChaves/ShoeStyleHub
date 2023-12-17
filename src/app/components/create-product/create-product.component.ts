import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../products.service';
import { Router } from '@angular/router';
import { Product } from "../Products";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = {
    name: '',
    description: '',
    price: 0,
    image: '',
  }

  constructor(
    private service: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  createProduct(){
    this.service.createProduct(this.product).subscribe(() => {
      this.router.navigate(['/']);
    })
  }

  cancel(){
    this.router.navigate(['/']);
  }

}
