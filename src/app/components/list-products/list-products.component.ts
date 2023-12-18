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

  currentPage: number = 1;

  hasMoreProducts: boolean = true;

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getAll(this.currentPage).subscribe((list) => {
      this.productList = list;
    })
  }

  loadMoreProducts(){
    this.service.getAll(this.currentPage += 1).subscribe((list) => {
      this.productList.push(...list);
      if(!list.length){
        this.hasMoreProducts = false;
      }
    })
  }

}
