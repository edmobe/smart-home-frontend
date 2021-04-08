import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  public houseState: any;
  public modalRef: any;
  public loaded = false;

  constructor(private modalService: BsModalService, ) {}

  ngOnInit(): void {
    this.houseState = {
      room1_light: false,
      room2_light: false,
      living_room_light: false,
      kitchen_light: false,
      dining_light: false,
      door1: false,
      door2: false,
      door3: false,
      door4: false,
      door5: false,
    };
  }

  switchLight(room: string): void {
    switch (room) {
      case 'room1':
        this.houseState.room1 = !this.houseState.room1;
        break;
      case 'living_room':
        this.houseState.living_room = !this.houseState.living_room;
        break;
      case 'kitchen':
        this.houseState.kitchen = !this.houseState.kitchen;
        break;
      case 'dining':
        this.houseState.dining = !this.houseState.dining;
        break;
      case 'room2':
        this.houseState.room2 = !this.houseState.room2;
        break;
      default:
        break;
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }

  setDoorStates() {
    this.houseState.door1 = true;
    this.houseState.door2 = true;
    this.houseState.door3 = true;
    this.houseState.door4 = true;
    this.houseState.door5 = true;
  }

  loadPlan() {
    this.loaded = true;
  }
}
