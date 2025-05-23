import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, ProductSale } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclient: HttpClient) { }

  getProducts() {
    return this.httpclient.get<Product[]>(`${environment.productApiUrl}GetProducts`)
  }

  getProductSales(id?: number) {
    return this.httpclient.get<ProductSale[]>(`${environment.productApiUrl}GetProductSales?Id=${id}`)
  }
}
