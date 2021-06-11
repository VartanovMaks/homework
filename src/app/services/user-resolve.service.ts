import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<User>{

constructor(private userService:UserService) { }

resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User>{
  console.log('params passed to user resolve', activatedRouteSnapshot.params);

  return this.userService.getSingleUser(activatedRouteSnapshot.params.id);
}

}
