import { getLocaleDateFormat } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class ModalEditComponent implements OnInit {
  @Input() user: User;

  newPhoto: any = null;

  listUsers: any;

  userForm = new FormGroup({
    fio: new FormControl(),
    birthdayDate: new FormControl(),
    photo: new FormControl()
  });

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
    this.userForm.setValue({
      fio: this.user.fio,
      birthdayDate: this.user.birthdayDate.split('T')[0],
      photo: ""
    });
  }

  async patchData() {
    if (this.newPhoto == null) this.newPhoto = this.base64ToBlob(this.user.photo);
    
    const fd = new FormData();
    fd.append('Photo', this.newPhoto);

    const newData = {
      id: this.user.id,
      fio: this.fioControl?.value,
      birthdayDate: new Date(this.birthdayDateControl?.value).toISOString(),
    }

    this._userService.patchUser(newData, fd).subscribe();

    this.modalService.dismissAll();
    location.reload();

  }

  saveFile(event) {
    if (event.target.files.length > 0) {
      const f: File = event.target.files[0];
      this.newPhoto = f;
    }
  }

  public base64ToBlob(b64Data) {
    const imageName = 'name.png';
    const imageBlob = this.dataURItoBlob(b64Data);
    const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
    return imageFile;
  }

  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/png' });    
    return blob;
 }

}