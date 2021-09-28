import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  users: User[] = [];
  data = '';
  start = 0;
  value = '';
  

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService
    .getUsers(this.start)
    .subscribe((data: any) => (this.users = data));
  }

  onClickUser(id: number, username: string) {
    this.router.navigate(['/features', `${id}`, username]);
  }

  @HostListener('document:scroll')
  onScroll() {
    if (!this.start) {
      this.start += 5;

      this.userService
        .getUsers(this.start)
        .subscribe((data: any) => (this.users = this.users.concat(data)));
    }
  }


  
}