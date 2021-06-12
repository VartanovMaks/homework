import { PostComponent } from './components/post/post.component';
import { PostCommentsComponent } from '../post/components/postComments/postComments.component';
import { PostService } from './services/post.service';
import { PostResolveService } from './services/post-resolve.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PostRoutingModule,
  ],
  declarations: [
    PostsComponent,
    PostComponent,
    PostCommentsComponent
  ],
  providers:[
    PostService,
    PostResolveService
  ]
})
export class PostModule { }
