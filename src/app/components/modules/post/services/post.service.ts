import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
  export class PostService {
    private postsUrl='https://jsonplaceholder.typicode.com/posts';
    private commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http:HttpClient) { }
  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.postsUrl);
  }

  getPostComments(id:string):Observable<Comment>{
    return this.http.get<Comment>(this.commentsUrl+'?postId='+id);
  }
}
