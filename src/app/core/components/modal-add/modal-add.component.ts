import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss']
})
export class ModalAddComponent implements OnInit {

  userForm = new FormGroup({
    fio: new FormControl(),
    birthdayDate: new FormControl(),
    photo: new FormControl()
  });

  newPhoto: any;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private _userService: UsersService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {

  }

  get fioControl() {
    return this.userForm.get('fio');
  }

  get birthdayDateControl() {
    return this.userForm.get('birthdayDate');
  }

  get photoControl() {
    return this.userForm.get('photo');
  }

  open(content) {
    this.modalService.open(content);
  }

  addData() {
    const fd = new FormData();
    fd.append('Photo', this.newPhoto);

    const newData = {
      fio: this.fioControl?.value,
      birthdayDate: new Date(this.birthdayDateControl?.value).toISOString(),
    }
    this._userService.addUser(newData, fd).subscribe();
    this.modalService.dismissAll();
    location.reload();
  }

  saveFile(event) {
    if (event.target.files.length > 0) {
      const f: File = event.target.files[0];
      this.newPhoto = f;
    }
  }

}
