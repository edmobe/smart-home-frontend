import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-garden-photo',
  templateUrl: './garden-photo.component.html',
  styleUrls: ['./garden-photo.component.scss']
})
export class GardenPhotoComponent implements OnInit {

  public loaded = false;
  public imageSource = '../../assets/loading.gif';

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  reset() {
    this.loaded = false;
    this.imageSource = '../../assets/loading.gif';
  }

  getImage() {
    this.httpService.getImage().subscribe({
      next: imageJsonString => {
        this.imageSource = 'data:image/png;base64,';
        this.imageSource += imageJsonString.b64_encoded;
        this.loaded = true;
      },
      error: error => {
        console.error(error);
      }
    });
  }
  

}
