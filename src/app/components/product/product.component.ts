import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    id: 0,
    name: 'teste',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    image: "https://imgnike-a.akamaihd.net/1920x1920/01113751.jpg",
    price: 20
  }

  constructor() { }

  ngOnInit(): void {
  }

}
