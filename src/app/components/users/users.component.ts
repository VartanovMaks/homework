import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  users:User[];

  constructor(private service:UsersService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(value=> this.users=value);
  }

}
