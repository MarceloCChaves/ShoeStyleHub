import { Component, OnInit } from '@angular/core';
import { Product } from '../Products';
import { ProductService } from 'src/app/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  productList: Product[] = [];

  messageLoading: string = "";

  currentPage: number = 1;

  hasMoreProducts: boolean = true;

  filter: string = "";

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getAll(this.currentPage, this.filter).subscribe((list) => {
      this.productList = list;
    })
  }

  loadMoreProducts(){
    this.service.getAll(this.currentPage += 1, this.filter).subscribe((list) => {
      this.productList.push(...list);
      if(!list.length){
        this.hasMoreProducts = false;
      }
    })
  }

  searchProduct(){
    this.hasMoreProducts = true;
    this.currentPage = 1;
    this.service.getAll(this.currentPage, this.filter)
      .subscribe(list => {
        this.productList = list;
      })
  }

}
