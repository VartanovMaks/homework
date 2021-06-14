import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.scss']
})
export class SizerComponent {

  constructor() { }
  @Input()  size!: number | string;
  @Output() sizeChange = new EventEmitter<number>();
  @Output() nameChange = new EventEmitter<string>();
  @Input()  name:string;
  @Input()  surname:string;

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

  fname(n:string,s:string){
    this.nameChange.emit(n+s);
  }

    change(){
      this.fname(this.name,this.surname);
    }

}
