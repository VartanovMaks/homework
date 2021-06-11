import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/components/modules/user/models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user:User;

  constructor(private activatedRoute:ActivatedRoute) {

    this.activatedRoute.data.subscribe(value => this.user = value.userData)
}

  ngOnInit() {
  }

}
