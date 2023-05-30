import {Component, OnDestroy, OnInit} from '@angular/core';
import { UsersService} from "../../core/services/users.service";
import { IUser } from "../../core/interfaces/IUser";
import { Subject, takeUntil, tap} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  subject$ = new Subject();

  public users!: IUser[];


  constructor(private userService: UsersService) {
    this.users = [];
  }

  ngOnInit(): void {
    this.getUsers();
  }
  private getUsers(): void {
    this.userService.getAllUsers()
      .pipe(
        takeUntil(this.subject$)
      )
      .subscribe((res: IUser[]) => {
        this.users = res;
        console.log(this.users)
      })
  }

  // delete user
  public deleteUser(id: number): void  {
     const check =  window.confirm("Do you really want to delete this user?");
     check ? this.users = this.users.filter(item => item.id !== id) : false;
  }

  public create(data: any): void {
   this.users.push(data);
  }

  public update(data: any): void {
    console.log(data)
    this.users.forEach((item) => {
      if (item.id == data.id) {
        item.name = data.name,
        item.username = data.username,
        item.email = data.email,
        item.address.street = data.address.street,
        item.address.suite = data.address.suite
      }
    })
  }

  public send(): void {

  }


 /* public closeUpdateModal(close: any): void {
    this.updateModalOpen = close;
  }*/
  ngOnDestroy(): void {
    this.subject$.next(true);
    this.subject$.unsubscribe();
  }
}
