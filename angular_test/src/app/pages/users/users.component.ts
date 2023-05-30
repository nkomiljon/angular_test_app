import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from "../../core/services/users.service";
import {IUser} from "../../core/interfaces/IUser";
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

 // public $subject: Subject<IUser[]> = new Subject<IUser[]>();
  //public $user: Observable<IUser>[];
  public users: IUser[];
  constructor(private userService: UsersService) {
    this.users = [];
  }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.userService.getAllUsers()
      .pipe()
      .subscribe((res: IUser[]) => {
        //this.$subject.next(res);
        this.users = res;
        console.log(this.users);
      })
  }


  public deleteUser(id: number): void {
    this.users = this.users.filter(item => item.id !== id);
  }

  public updateUser(){

  }

  ngOnDestroy(): void {
  }
}
