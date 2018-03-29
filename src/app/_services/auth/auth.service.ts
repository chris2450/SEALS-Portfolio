import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from '../httpBaseUrl/httpBaseUrl';
import {Router, CanActivate} from '@angular/router';
@Injectable()
export class AuthService {

  constructor(public http: HttpClient) { }
  login(payLoad) {
    const endPoint = baseUrl + '/login';

    return this.http.post(endPoint, payLoad);

  }

  sendMessage(payLoad) {

    const endPoint = baseUrl + '/newMessages';

    return this.http.post(endPoint, payLoad);
  }
}
