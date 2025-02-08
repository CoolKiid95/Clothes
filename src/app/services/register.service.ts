import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { localUrl } from '../utils/Url';
import { prodUrl } from '../utils/Url';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
    // apiUrl = prodUrl
    apiUrl = 'http://localhost:4000/api'

    token:any = sessionStorage.getItem('token')
  constructor(private http : HttpClient) { }

  addUser (body:any){
    return this.http.post(`${this.apiUrl}/adduser`, body)
  }
  login(body:any){
    return this.http.post(`${this.apiUrl}/validacion`, body)
  }

}
