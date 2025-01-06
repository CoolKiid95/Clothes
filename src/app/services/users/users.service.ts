import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl:string ="http://localhost:4000/api"
  token: any = sessionStorage.getItem('token')

  constructor(private http: HttpClient) {}

  GetUser(id:string){
      return this.http.get(`${this.apiUrl}/user/${id}`)
  }
  Validar(id:string){
    
    // const headers = new HttpHeaders().set("Authorization", `Bearer ${this.token}`)
    // console.log(this.token);
    const token = sessionStorage.getItem('token')
    console.log(token);
    
    

    return this.http.post(`${this.apiUrl}/validar/${id}`,{token})

  }
  UpdateUser(id:string,body:any){
    const headers = new HttpHeaders().set ("Authorization", `Bearer ${this.token}`)
    return this.http.put(`${this.apiUrl}/updateuser/${id}`,body, {headers})

  }
}
