import { UserStorageService } from '../../services/userStorage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  userName:string; //user name to be written in upper right corner. Getting from store.

  constructor(private userStorage:UserStorageService) {
    this.userStorage.userInStore.subscribe(value=>this.userName=value.name);
  }

  ngOnInit() {
  }

}
