import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl:string ="http://localhost:4000/api"

  token: any = sessionStorage.getItem('token')

  constructor(private http: HttpClient) { }


  GetProduct(id:string){
    return this.http.get(`${this.apiUrl}/product/${id}`)
  }
  GetProductsbyCategories(categorias:string){
    console.log(categorias);

    return this.http.get(`${this.apiUrl}/productbyCategory/${categorias}`)

  }
  addProduct (body:any ){
    const headers = new HttpHeaders().set ("Authorization", `Bearer ${this.token}`)
    return this.http.post(`${this.apiUrl}/addproduct`, body, {headers})

  }
  }

