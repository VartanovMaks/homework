import { UserService } from '../services/user.service';
import { Post } from '../models/post';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<Post[]>{

constructor(private userService:UserService) { }

resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]>{
  console.log('params passed to user resolve', activatedRouteSnapshot.params);

  return this.userService.getUsersPosts(activatedRouteSnapshot.params.id);
}

}
