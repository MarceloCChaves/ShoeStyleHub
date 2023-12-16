import { Component, OnInit } from '@angular/core';
import { Product } from '../Products';
import { ProductService } from 'src/app/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  productList: Product[] = [

  ];

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((list) => {
      this.productList = list;
    })
  }

}
