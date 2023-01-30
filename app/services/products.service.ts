import { Injectable } from '@angular/core';
//que se importe bien httpClient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  //ponemos el constructor
  db_url: string = 'http://localhost:3000/products';
  product: any;
  id!: number;
  constructor(private http: HttpClient) {}

  //aquí get, post, put, delete.... de nuestras urls
  getAllProducts() {
    return this.http.get(this.db_url)
  }

  getProduct(id: number){
    return this.http.get(`${this.db_url}/${id}`);
  }

  postProduct(product: any){
    return this.http.post(this.db_url, product);
  }

  putProduct(product: any, id: number){
    return this.http.put(`${this.db_url}/${id}`, product);
  }

  deleteProduct(id: number){
    return this.http.delete(`${this.db_url}/${id}`);
  }


  setProduct(product: any){
    this.product = product;
    this.id = product.id;
  }

}
