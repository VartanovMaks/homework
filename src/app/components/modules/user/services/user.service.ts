import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl='https://jsonplaceholder.typicode.com/users'
  private postsUrl='https://jsonplaceholder.typicode.com/posts'

constructor(private http:HttpClient) { }
getUsers():Observable<User[]>{
  return this.http.get<User[]>(this.usersUrl);
}
getSingleUser(id:string):Observable<User>{
  return this.http.get<User>(this.usersUrl+'/'+id);
}
getUsersPosts(id:string):Observable<Post[]>{
  return this.http.get<Post[]>(this.postsUrl+'?userId='+id);
}

}
