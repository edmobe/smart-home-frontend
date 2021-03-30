import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() loggedEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  loginEvent(value: boolean): void {
    this.loggedEvent.emit(value);
  }

}
