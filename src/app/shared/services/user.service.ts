import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public publicUsers: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(['Albert Camus', 'Romain Gary', ]);

  constructor() { }

  addUser(name: string): void {
    const publicUsers = this.publicUsers.value.slice();
    console.log(publicUsers);
    publicUsers.push(name);
    this.publicUsers.next(publicUsers);
  }

}
