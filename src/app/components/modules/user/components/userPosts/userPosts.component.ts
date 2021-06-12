import { Post } from '../../models/post';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userPosts',
  templateUrl: './userPosts.component.html',
  styleUrls: ['./userPosts.component.scss']
})
export class UserPostsComponent implements OnInit {

  posts:Post[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.posts=value.data)
  }

  ngOnInit() {
  }

}
