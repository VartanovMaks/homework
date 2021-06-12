import { HomeComponent } from '../app/components/app/components/home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';

let routes:Routes = [
  {path:'users', loadChildren:()=>import('./components/modules/user/user.module').then(m=>m.UserModule)},
  {path:'posts', loadChildren:()=>import('./components/modules/post/post.module').then(m=>m.PostModule)},
  {path:'**', component:HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
