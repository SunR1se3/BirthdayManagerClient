import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  upcomingBirthdays: any;
  countUsers: any;
  page: number = 1;
  today = new Date().toISOString().split('T')[0];

  constructor(private _userService: UsersService) { }

  ngOnInit(): void {
    this._userService.getUpcomingBirthdays().subscribe(r => {
      this.upcomingBirthdays = r;
      this.countUsers = this.upcomingBirthdays.length;

      this.decodeBase64Img();
    })    
  }

  decodeBase64Img() {
    for (let i = 0; i < this.countUsers; i++) {
      this.upcomingBirthdays[i].photo = 'data:image/png;base64,' + this.upcomingBirthdays[i].photo;
      this.upcomingBirthdays[i].birthdayDate = this.upcomingBirthdays[i].birthdayDate.split('T')[0];
    }
  }
}
