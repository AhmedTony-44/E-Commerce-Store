import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://ecommerce.routemisr.com/api/v1/products';

  constructor(private http: HttpClient) {}

  // GET all products
  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // GETsingle product by ID
  getProductById(productId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${productId}`);
  }

  // Search products by ?keyword=...
  searchProducts(term: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?keyword=${term}`);
  }
}
