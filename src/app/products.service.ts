import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../app/components/Products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly API = "http://localhost:3000/products"

  constructor(private http: HttpClient) {
  }

  getAll(page: number, filter: string): Observable<Product[]>{
    const itensPerPage = 5;

    let params = new HttpParams()
      .set("_page", page)
      .set("_limit", itensPerPage)

    if(filter.trim().length > 2){
      params = params.set("q", filter);
    }

    return this.http
      .get<Product[]>(this.API, {params: params});
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

  changeFavorite(product: Product): Observable<Product>{
    product.isFavorited = !product.isFavorited;
    return this.editProduct(product);
  }
}
