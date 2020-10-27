import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl = 'https://localhost:44382/api/user';

constructor(private http: HttpClient) { }

register(model: any) {
  return this.http.post(this.baseUrl, model);
}

}
