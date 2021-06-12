import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PostRoutingModule,
  ],
  declarations: [PostsComponent]
})
export class PostModule { }
