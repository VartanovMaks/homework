import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:Post[];

  @Input()
  uid:number;  // user id passed from UserComponent

  constructor(private service:PostsService) { }

  ngOnInit() {
    this.service.getUserPosts(this.uid).subscribe(data=>{
      console.log(data);
      this.posts=data
    });

  }

}
