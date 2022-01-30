import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginURL = environment.APIurl + 'Identity/login';
  private registerURL = environment.APIurl + 'Identity/register'

  constructor(private httpClient: HttpClient) { }

  login(data: any): Observable<any>{
    return this.httpClient.post(this.loginURL, data)
  }

  register(data: any): Observable<any>{
    return this.httpClient.post(this.registerURL, data)
  }
  
}
