import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title:string; //user name to be written in upper right corner. Getting from store.

  constructor() {
    this.title="cars database"

  }

  ngOnInit() {
  }

}
