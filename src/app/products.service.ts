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

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.API, product)
  }

  findById(id: number): Observable<Product> {
    const url = `${this.API}/${id}`
    return this.http.get<Product>(url);
  }

  editProduct(product: Product): Observable<Product> {
    const url = `${this.API}/${product.id}`
    return this.http.put<Product>(url, product);
  }

  deleteProduct(id: number): Observable<Product>{
    const url = `${this.API}/${id}`
    return this.http.delete<Product>(url);
  }
}
