import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private query='?userId=';

  constructor(private http:HttpClient) { }

  // getPosts doesn't used yet
  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.postsUrl);
  }
  getUserPosts(userId:number):Observable<Post[]>{
    let result = this.http.get<Post[]>(this.postsUrl+this.query+userId.toString());
    // console.log(this.postsUrl+this.query+userId.toString());
    return result;
  }

}
