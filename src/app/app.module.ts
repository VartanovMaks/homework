import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './components/app/app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { UserResolveService } from './components/modules/user/services/user-resolve.service';
import { PostResolveService } from './components/modules/post/services/post-resolve.service';

let routes: Routes = [
  { path: 'users', component:UsersComponent,
    children:[
      {path:':id', component:UserDetailsComponent,
        resolve:{userData:UserResolveService}
      }
    ]
  },
  { path: 'posts', component:PostsComponent,
    children:[
      {path:':id', component:PostDetailsComponent,
      resolve:{postData:PostResolveService}
      }
    ]
  },
  { path: '**', redirectTo:'users'}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
