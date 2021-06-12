import { Comment } from '../../models/comment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postComments',
  templateUrl: './postComments.component.html',
  styleUrls: ['./postComments.component.scss']
})
export class PostCommentsComponent implements OnInit {
  comments:Comment[];


  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.comments=value.data)
  }

  ngOnInit() {
  }

}
