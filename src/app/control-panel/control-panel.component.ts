import { Component, OnInit, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  public house_state: any;
  public modalRef: any;

  constructor(private changeDetector: ChangeDetectorRef, private modalService: BsModalService, ) {}

  ngOnInit(): void {
    this.house_state = {
      room1_light: false,
      room2_light: false,
      living_room_light: false,
      kitchen_light: false,
      dining_light: false
    };
  }

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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }

  detectChanges(): void {
    this.changeDetector.detectChanges();
  }
}
