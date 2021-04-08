import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private imageUrl = 'http://192.168.0.15:4000/get_image';

  constructor(private http: HttpClient) { }

  getImage() {
    return this.http.get<any>(this.imageUrl);
  }
}
