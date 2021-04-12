import { ChangeDetectorRef, Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from '../services/auth.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  public houseState = {
    room1: false,
    room2: false,
    living_room: false,
    kitchen: false,
    dining: false,
    door1: false,
    door2: false,
    door3: false,
    door4: false,
    door5: false,
  };
  public modalRef: any;
  public loaded = false;

  constructor(
    private modalService: BsModalService,
    private httpService: HttpService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.httpService.getLeds().subscribe((response) => {
      this.houseState.room1 = !!response.led4;
      this.houseState.room2 = !!response.led5;
      this.houseState.living_room = !!response.led1;
      this.houseState.kitchen = !!response.led2;
      this.houseState.dining = !!response.led3;
      this.httpService.getDoors().subscribe((response) => {
        this.houseState.door1 = !!response.door4;
        this.houseState.door2 = !!response.door1;
        this.houseState.door3 = !!response.door2;
        this.houseState.door4 = !!response.door5;
        this.houseState.door5 = !!response.door3;
        this.loaded = true;
      });
    });

    setInterval(() => {
      this.updateDoors();
    }, 500);
  }

  switchLight(room: string): void {
    switch (room) {
      case 'room1':
        this.httpService.setLed(4).subscribe(() => {
          this.houseState.room1 = !this.houseState.room1;
        });
        break;
      case 'living_room':
        this.httpService.setLed(1).subscribe(() => {
          this.houseState.living_room = !this.houseState.living_room;
        });
        break;
      case 'kitchen':
        this.httpService.setLed(2).subscribe(() => {
          this.houseState.kitchen = !this.houseState.kitchen;
        });
        break;
      case 'dining':
        this.httpService.setLed(3).subscribe(() => {
          this.houseState.dining = !this.houseState.dining;
        });
        break;
      case 'room2':
        this.httpService.setLed(5).subscribe(() => {
          this.houseState.room2 = !this.houseState.room2;
        });
        break;
      default:
        break;
    }
  }

  turnOffAll() {
    if (this.houseState.room1) {
      this.httpService.setLed(4).subscribe(() => {
        this.houseState.room1 = !this.houseState.room1;
      });
    }
    if(this.houseState.living_room) {
      this.httpService.setLed(1).subscribe(() => {
        this.houseState.living_room = !this.houseState.living_room;
      });
    }
    if (this.houseState.kitchen) {
      this.httpService.setLed(2).subscribe(() => {
        this.houseState.kitchen = !this.houseState.kitchen;
      });
    }
    if (this.houseState.dining) {
      this.httpService.setLed(3).subscribe(() => {
        this.houseState.dining = !this.houseState.dining;
      });
    }
    if (this.houseState.room2) {
      this.httpService.setLed(5).subscribe(() => {
        this.houseState.room2 = !this.houseState.room2;
      });
    }
  }

  turnOnAll() {
    if (!this.houseState.room1) {
      this.httpService.setLed(4).subscribe(() => {
        this.houseState.room1 = !this.houseState.room1;
      });
    }
    if(!this.houseState.living_room) {
      this.httpService.setLed(1).subscribe(() => {
        this.houseState.living_room = !this.houseState.living_room;
      });
    }
    if (!this.houseState.kitchen) {
      this.httpService.setLed(2).subscribe(() => {
        this.houseState.kitchen = !this.houseState.kitchen;
      });
    }
    if (!this.houseState.dining) {
      this.httpService.setLed(3).subscribe(() => {
        this.houseState.dining = !this.houseState.dining;
      });
    }
    if (!this.houseState.room2) {
      this.httpService.setLed(5).subscribe(() => {
        this.houseState.room2 = !this.houseState.room2;
      });
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  updateDoors() {
    this.httpService.getDoors().subscribe((response) => {
      this.houseState.door1 = !!response.door4;
      this.houseState.door2 = !!response.door1;
      this.houseState.door3 = !!response.door2;
      this.houseState.door4 = !!response.door5;
      this.houseState.door5 = !!response.door3;
      this.loaded = true;
    });
  }

  loadPlan() {
    this.loaded = true;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
