import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../modules/post/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  post:Post;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  goToDetails(){
    // console.log('Go to post details',this.post);
    this.router.navigate([this.post.id], {relativeTo: this.activatedRoute});
    // this.router.navigate([this.post.id], {relativeTo: this.activatedRoute, state: this.post});

  }
}
