import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  fontSizePx = 16;
  n = 'Petro'
  s = "Poroshenko"
  surmame:string ='ffdf';

  catchCustomEvent(ev:string): void {
    console.log(ev)
    this.surmame = ev;
  }


}
