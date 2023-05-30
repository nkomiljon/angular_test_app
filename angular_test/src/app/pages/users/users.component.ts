import { Component, OnDestroy, OnInit} from '@angular/core';
import { UsersService} from "../../core/services/users.service";
import { IUser } from "../../core/interfaces/IUser";
import { Subject, takeUntil, tap} from "rxjs";
import { FormControl, FormGroup} from "@angular/forms";

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
  public modalStyle = "display: block; padding-right: 17px; background-color: rgba(0, 0, 0, 0.7)";
  public modalForm =  new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });
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
          item.name = data.name,
          item.username = data.username,
          item.email = data.email,
          item.address.street = data.address
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
  public updateUser() {
    const data = this.modalForm?.value;
    this.userService.createUser(data)
      .pipe()
      .subscribe((res) => {
        if (res) {
          this.updateUserData(this.id, data);
          this.closeModal();
        }
      })
  }
  public closeModal(): void {
    this.open = false;
  }
  ngOnDestroy(): void {
    this.subject$.next(true);
    this.subject$.unsubscribe();
  }
}
