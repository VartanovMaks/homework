import { UserStorageService } from '../../services/userStorage.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-userDetails',
  templateUrl: './userDetails.component.html',
  styleUrls: ['./userDetails.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Input()
  userDetailed:User;

  constructor(private userStorage:UserStorageService) {}

  ngOnInit() {
  }
  loadUserToStore(){
    // click function to load new user in global storage
    this.userStorage.pushUser(this.userDetailed);
    // console.log('User Details',this.userStorage.store.getValue().name);
  }

}
