import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {
  private defaultUser = {name:'anonymous', username:'', id:NaN, email:''};
  store = new BehaviorSubject<User>(this.defaultUser);
  userInStore= this.store.asObservable()

constructor() { }

pushUser(user:User){
  this.store.next(user);
}

}
