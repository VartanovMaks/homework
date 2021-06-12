import { UserResolveService } from '../user/services/user-resolve.service';
import { UserPostsComponent } from './components/userPosts/userPosts.component';
import { UserService } from './services/user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
  declarations: [
    UsersComponent,
    UserComponent,
    UserPostsComponent
  ],
  providers: [
    UserService,
    UserResolveService
  ]
})
export class UserModule { }
