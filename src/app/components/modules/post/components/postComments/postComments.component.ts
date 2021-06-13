import { PostService } from './../../services/post.service';
import { Comment } from '../../models/comment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../models/post';

@Component({
  selector: 'app-postComments',
  templateUrl: './postComments.component.html',
  styleUrls: ['./postComments.component.scss']
})
export class PostCommentsComponent implements OnInit {
  comments:Comment[];
  post:Post;

  constructor(private activatedRoute: ActivatedRoute, private router:Router, private postService:PostService) {

    // this.activatedRoute.data.subscribe(value => this.comments=value.postData);
    this.activatedRoute.data.subscribe(value => {
      this.comments=value.postData;
      this.post=this.router.getCurrentNavigation()?.extras.state as Post;

    });
    if (this.post == undefined){
      console.log(this.post);
      postService.getSinglePost(this.comments[0].postId.toString()).subscribe(value=>{
        this.post = value;
        console.log(this.post);
      })
    }

  }

  ngOnInit() {
  }

}
