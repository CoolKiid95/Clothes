import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl:string =""
  constructor(private http: HttpClient) { }

  GetProduct(id:string){
    return this.http.get(`${this.apiUrl}/product/${id}`)
  }
  GetProductsbyCategories(){
    
  }

}
