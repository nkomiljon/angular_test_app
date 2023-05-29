import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../core/service/users.service";
import {IUser} from "../../core/interfaces/IUser";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: IUser[]
  constructor(private userService: UsersService) {
    this.users = [];
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers()
      .pipe()
      .subscribe((res: IUser[]) => {
        this.users = res;
        console.log(this.users);
      })
  }
}
