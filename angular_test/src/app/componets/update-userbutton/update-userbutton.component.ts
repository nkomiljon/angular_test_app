import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UsersService} from "../../core/services/users.service";

@Component({
  selector: 'app-update-userbutton',
  templateUrl: './update-userbutton.component.html',
  styleUrls: ['./update-userbutton.component.css']
})
export class UpdateUserbuttonComponent {

  @Input() data: any;
  @Output() sendData = new EventEmitter<any>();
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

  public update() {
    this.open = true;
    this.modalForm.patchValue({
      name: this.data.name,
      username: this.data.username,
      email: this.data.email,
      address: {
        street: this.data.address.street,
        suite: this.data.address.suite
      }
    })
  }

  public send(): void {
    const data = {
      id: this.data.id,
      name: this.modalForm.value.name,
      username: this.modalForm.value.username,
      email: this.modalForm.value.email,
      address: {
        street: this.modalForm.value.address?.street,
        suite: this.modalForm.value.address?.suite,
      }
    }
    this.userService.createUser(this.modalForm.value)
      .subscribe((res) => {
        this.sendData.emit(data);
        this.modalForm.reset();
        this.closeModal();
      })
  }

  public closeModal(): void {
    this.open = false;
  }
}
