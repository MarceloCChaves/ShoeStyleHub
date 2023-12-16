import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../app/components/Products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly API = "http://localhost:3000/products"

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.API);
  }
}
