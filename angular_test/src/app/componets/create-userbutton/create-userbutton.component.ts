import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UsersService} from "../../core/services/users.service";

@Component({
  selector: 'app-create-userbutton',
  templateUrl: './create-userbutton.component.html',
  styleUrls: ['./create-userbutton.component.css']
})
export class CreateUserbuttonComponent {

  @Output() data = new EventEmitter<any>();

  public open: boolean = false;
  public modalStyle = "display: block; padding-right: 17px; background-color: rgba(0, 0, 0, 0.7)";
  public modalForm =  new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      suite: new FormControl(''),
    })
  });

  constructor(private userService: UsersService) {
  }
  public create(): void {
    this.open = true;
  }

  public closeModal(): void {
    this.open = false;
  }

  public send(): void {
    this.userService.createUser(this.modalForm.value)
      .subscribe((res) => {
        this.data.emit(res);
        this.modalForm.reset();
        this.closeModal();
      })
  }
}
