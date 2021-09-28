import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../components/users/user.model';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  url = `https://jsonplaceholder.typicode.com/users`;
  
  getUsers(start: number): Observable<User[]> {
    return this.http.get(`${this.url}/?_start=` + start + '&_limit=5').pipe(
      map((data: any) => {
        let userList = data;
        return userList.map(function (user: any): User {
          return new User(
            user.id,
            user.name,
            user.username,
            user.email,
            user.address,
            user.phone,
            user.website,
            user.company
          );
        });
      })
      );
      
  }


  getUserById(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}


