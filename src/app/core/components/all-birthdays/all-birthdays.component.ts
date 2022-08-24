import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { count } from 'rxjs';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-all-birthdays',
  templateUrl: './all-birthdays.component.html',
  styleUrls: ['./all-birthdays.component.scss']
})
export class AllBirthdaysComponent implements OnInit {

  allUsers: any;
  page: number = 1;
  countUsers: any;
  idPrevCard: any = -1;
  user: User = { id: 0, fio: "", birthdayDate: "", photo: "" };
  image: any;

  constructor(private _userService : UsersService) { }

  ngOnInit(): void {
    this._userService.getAll().subscribe(data => {
      this.allUsers = data;
      this.countUsers = this.allUsers.length;
      
      this.decodeBase64Img();

      // for(let i = 0; i < this.countUsers; i++) {
      //   this.allUsers[i].photo = 'data:image/png;base64,' + this.allUsers[i].photo;
      // }
      
    })
  }

  onClickCard(event) {
    let currentCard = event.currentTarget;
    if (this.idPrevCard != currentCard.id && this.idPrevCard != -1) document.getElementById(this.idPrevCard)?.classList.remove('shadow-lg');
    this.idPrevCard = currentCard.id;
    //this.user.id = this.idPrevCard;
    this.findClickedUser(this.idPrevCard);
    currentCard.classList.add('shadow-lg');
  }

  findClickedUser(id) {
    this._userService.getById(id).subscribe(data => {
      this.user.id = data['id'];
      this.user.fio = data['fio'];
      this.user.birthdayDate = data['birthdayDate'].split('T')[0];
      this.user.photo = data['photo'];
    })    
  }

  updateListUsers(newList) {
    this.allUsers = newList;
    this.decodeBase64Img();
  }

  decodeBase64Img() {
    for(let i = 0; i < this.countUsers; i++) {
      this.allUsers[i].photo = 'data:image/png;base64,' + this.allUsers[i].photo;
      this.allUsers[i].birthdayDate = this.allUsers[i].birthdayDate.split('T')[0];
    }

  }
  
}
