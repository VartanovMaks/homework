import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<Post> {

constructor(private postService: PostService) {}

resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
  console.log('params passed to resolve', activatedRouteSnapshot.params);

  return this.postService.getSinglePost(activatedRouteSnapshot.params.id);
}

}
