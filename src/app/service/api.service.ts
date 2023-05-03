/* import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}
sendData(label: string) {
    let url = 'http://200.201.206.43:15672/#/queues';
    let data = { label: label };
 
     return this.http.post(url, data);
  }
}
 */