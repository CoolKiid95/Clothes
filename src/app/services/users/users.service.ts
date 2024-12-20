import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl:string ="http://localhost:4000/api"

  constructor(private http: HttpClient) {}

  GetUser(id:string){
      return this.http.get(`${this.apiUrl}/user/${id}`)
  }

}
