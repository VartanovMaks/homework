import { UserResolveService } from '../user/services/user-resolve.service';
import { UserPostsComponent } from './components/userPosts/userPosts.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'', component:UsersComponent, children:[
    {path:':id', component:UserPostsComponent, resolve:{data:UserResolveService}}
    ]
  },
  {path:'**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class UserRoutingModule { }
