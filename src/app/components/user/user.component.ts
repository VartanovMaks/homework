import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input()
  user:User;

  @Output()
  activateUser = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }
  userClicked(){
    // when button is clicked UserDetails start to render
    this.activateUser.emit(this.user);
  }

}
