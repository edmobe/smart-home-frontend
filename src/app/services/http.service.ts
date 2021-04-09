import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = 'http://192.168.0.15:4000';

  constructor(private http: HttpClient) { }

  getImage() {
    return this.http.get<any>(`${this.apiUrl}/get_image`);
  }

  getLeds() {
    return this.http.get<any>(`${this.apiUrl}/get_state_led`);
  }

  getDoors() {
    return this.http.get<any>(`${this.apiUrl}/get_door`);
  }

  setLed(id: number) {
    return this.http.get<any>(`${this.apiUrl}/set_led/${id}`);
  }
}
