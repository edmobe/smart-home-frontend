import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  private image: any;
  public house_state: any;

  constructor(private httpService : HttpService, private changeDetector: ChangeDetectorRef) { }

  switchLight(room: string): void {
    switch (room) {
      case 'room1':
        this.house_state.room1 = !this.house_state.room1;
        break;
      case 'living_room':
        this.house_state.living_room = !this.house_state.living_room;
        break;
      case 'kitchen':
        this.house_state.kitchen = !this.house_state.kitchen;
        break;
      case 'dining':
        this.house_state.dining = !this.house_state.dining;
        break;
      case 'room2':
        this.house_state.room2 = !this.house_state.room2;
        break;
      default:
        break;
    }
  }

  ngOnInit(): void {
    this.house_state = {
      room1_light: false,
      room2_light: false,
      living_room_light: false,
      kitchen_light: false,
      dining_light: false
    };

    this.image = new Image();
    this.image.src = 'data:image/png;base64,'
    this.httpService.getImage().subscribe({
      next: imageJsonString => {
        this.image.src += imageJsonString.b64_encoded;
        //document.body.appendChild(this.image);
      },
      error: error => {
        console.error(error);
      }
    });
    
  }

}
