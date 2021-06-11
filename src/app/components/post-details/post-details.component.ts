import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post:Post;

  constructor(private postService:PostService,
              private activatedRoute:ActivatedRoute) {
      this.activatedRoute.params.subscribe(value => {
        this.postService.getSinglePost(value.id).subscribe(value => this.post = value)
      });

      this.activatedRoute.data.subscribe(data => console.log(data))
  }

  ngOnInit() {
  }

}
