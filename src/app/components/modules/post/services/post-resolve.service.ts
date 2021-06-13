import { Comment } from './../models/comment';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<Comment> {

constructor(private postService: PostService) {}

resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comment> {
  console.log('params passed to resolve', activatedRouteSnapshot.params);

  return this.postService.getPostComments(activatedRouteSnapshot.params.id);
}

}
