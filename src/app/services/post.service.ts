import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
  export class PostService {
    private baseUrl='https://jsonplaceholder.typicode.com/posts'

  constructor(private http:HttpClient) { }
  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.baseUrl);
  }
  getSinglePost(id:string):Observable<Post>{
    return this.http.get<Post>(this.baseUrl+'/'+id);
  }
}
