import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() openModal: boolean = false;
  @Output() userData = new EventEmitter<any>();
  @Output() close = new EventEmitter<boolean>();

  public modalStyle = "display: block; padding-right: 17px; background-color: rgba(0, 0, 0, 0.7)";
  public modalForm =  new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });

  public closeModal(): void {
    this.close.emit(false);
  }
  public updateUser() {
    this.userData.emit(this.modalForm);
  }
}
