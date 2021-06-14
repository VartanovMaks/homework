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
  constructor() { }

  ngOnInit() {
  }

}
