import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private imageUrl = '../../assets/image';

  constructor(private http: HttpClient) { }

  getImage() {
    return this.http.get<any>(this.imageUrl);
  }
}
