import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  form!: FormGroup

  constructor(
    private service: ProductService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
      ])],
      description: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      price: [0, Validators.compose([
        Validators.required,
        Validators.pattern(/^[1-9][0-9]*$/)
      ])],
      image: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(https?:\/\/.*\.(?:png|jpg))/i)
      ])],
      isFavorited: [false]
    });
  }

  enableButton(){
    if(this.form.valid){
      return 'create-product-save'
    } else {
      return 'disabled-button'
    }
  }

  createProduct(){
    if(this.form.valid){
      this.service.createProduct(this.form.value).subscribe(() => {
        this.router.navigate(['/']);
      })
    }
  }

  cancel(){
    this.router.navigate(['/']);
  }

}
