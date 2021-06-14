import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:User[];
  activatedDetails:boolean;

  constructor(private usersService:UsersService){
    this.activatedDetails=false;
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe(value=>this.users=value)
  }

}
