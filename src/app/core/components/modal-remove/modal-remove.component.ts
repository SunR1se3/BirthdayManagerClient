import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-modal-remove',
  templateUrl: './modal-remove.component.html',
  styleUrls: ['./modal-remove.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class ModalRemoveComponent implements OnInit {

  @Input() user: User;
  @Output() listUsersEmitter = new EventEmitter<any>();

  listUsers: any;

  dataUser: any;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private _userService : UsersService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  open(content) {
    if (this.user.id != 0) {
      this._userService.getById(this.user.id).subscribe(data => {
        this.dataUser = data;
      }) 
      this.modalService.open(content);
    }
  }

  deleteUser() {
    this._userService.delete(this.dataUser).subscribe(r => {
      this._userService.getAll().subscribe(data => {
        this.listUsers = data;
        this.listUsersEmitter.emit(this.listUsers);
      })  
    });
    this.modalService.dismissAll();
  }
}
