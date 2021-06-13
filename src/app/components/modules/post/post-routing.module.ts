import { PostResolveService } from './services/post-resolve.service';
import { PostCommentsComponent } from './components/postComments/postComments.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {path:'', component:PostsComponent,children:[
    {path:':id', component:PostCommentsComponent, resolve:{postData:PostResolveService}}
    ]
  },
  {path:'**', redirectTo:'' }
];
@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule]
})
export class PostRoutingModule { }
