import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/products.service';
import { Product } from '../Products';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  product: Product = {
    name: '',
    description: '',
    price: 0,
    image: '',
  }

  constructor(
    private service: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.findById(Number(id)).subscribe((item) => {
      this.product = item;
    })
  }

  deleteProduct(){
    if(this.product.id){
      this.service.deleteProduct(this.product.id).subscribe(() => {
        this.router.navigate(['/']);
      })
    }
  }

  cancel(){
    this.router.navigate(['/']);
  }

}
