import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  form!: FormGroup

  constructor(
    private service: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.findById(parseInt(id!)).subscribe((item) => {
      this.form = this.formBuilder.group({
        id: [item.id],
        name: [item.name, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ])],
        description: [item.description, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        price: [item.price, Validators.compose([
          Validators.required,
          Validators.pattern(/^[1-9][0-9]*$/)
        ])],
        image: [item.image, Validators.compose([
          Validators.required,
          Validators.pattern(/(https?:\/\/.*\.(?:png|jpg))/i)
        ])],
      });;
    })
  }

  enableButton(){
    if(this.form.valid){
      return 'edit-product-save'
    } else {
      return 'disabled-button'
    }
  }

  editProduct(){
    this.service.editProduct(this.form.value).subscribe(() => {
      this.router.navigate(['/']);
    })
  }

  cancel(){
    this.router.navigate(['/']);
  }

}
