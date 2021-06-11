import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:Post[];

  constructor(private postService:PostService) {
  this.postService.getPosts().subscribe(value=> this.posts=value);
  }

  ngOnInit() {
  }

}
