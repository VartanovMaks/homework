import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:User[];
  activatedDetails:boolean; //flag to show UserDetailsComponent
  activeUser:User;          // choosen user from UserComponent

  constructor(private usersService:UsersService){
    this.activatedDetails=false;
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe(value=>this.users=value)
  }
  getActivatedUser(user:User){
    // user passed from child component - UserComponent
    this.activatedDetails=true;
    this.activeUser=user;
  }

}
