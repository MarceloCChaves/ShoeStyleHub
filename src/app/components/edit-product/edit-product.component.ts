import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/products.service';
import { Product } from '../Products';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

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
    this.service.findById(parseInt(id!)).subscribe((item) => {
      this.product = item;
    })
  }

  editProduct(){
    this.service.editProduct(this.product).subscribe(() => {
      this.router.navigate(['/']);
    })
  }

  cancel(){
    this.router.navigate(['/']);
  }

}
