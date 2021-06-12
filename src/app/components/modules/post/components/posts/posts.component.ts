import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:Post[];

  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(value =>this.posts = value)
  }

}
