import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post:Post;

  constructor(private activatedRoute:ActivatedRoute) {

      this.activatedRoute.data.subscribe(value => this.post = value.postData)
  }

  ngOnInit() {
  }
}
