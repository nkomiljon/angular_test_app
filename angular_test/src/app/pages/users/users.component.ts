import {Component, OnDestroy, OnInit} from '@angular/core';
import { UsersService} from "../../core/services/users.service";
import { IUser } from "../../core/interfaces/IUser";
import { Subject, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  subject$ = new Subject();
  private id!: number;
  public users: IUser[];
  public open: boolean = false;

  constructor(private userService: UsersService) {
    this.users = [];
  }

  ngOnInit() {
    this.getUsers();
  }
  private getUsers() {
    this.userService.getAllUsers()
      .pipe(
        takeUntil(this.subject$)
      )
      .subscribe((res: IUser[]) => {
        this.users = res;
      })
  }
  private updateUserData(id: number, data: any) {
    this.users.forEach((item) => {
      if (item.id == id) {
          item.name = data.value.name,
          item.username = data.value.username,
          item.email = data.value.email,
          item.address.street = data.value.address
      }
    })
  }
  public deleteUser(id: number): void {
    this.users = this.users.filter(item => item.id !== id);
  }
  public openModal(id: number){
      this.open = true;
      this.id = id;
  }
  public updateUser(userData: any) {
    this.userService.createUser(userData.value)
      .pipe(takeUntil(this.subject$))
      .subscribe((res) => {
        if (res) {
          this.updateUserData(this.id, userData);
           this.open = false;
        }
      })
  }
  public closeModal(data: any) {
    this.open = data;
  }
  ngOnDestroy(): void {
    this.subject$.next(true);
    this.subject$.unsubscribe();
  }
}
