import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl:string =""

  constructor(private http: HttpClient) {}
  
  GetUser(id:string){
      this.http.get(`${this.apiUrl}/user/${id}`)
  }
}
