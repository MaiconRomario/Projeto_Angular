import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  sendData(label: string) {
    let url = '';
    let data = { label: label };
    return this.http.post(url, data);
  }
}
