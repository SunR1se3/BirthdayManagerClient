import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get('https://localhost:44396/api/User');
  }

  getById(id) {
    return this._http.get('https://localhost:44396/api/User/' + id);
  }

  delete(dataUser) {
    // let headers = {
    //   headers: new HttpHeaders({
    //       'Content-Type': 'application/json'
    //   })
    // }

    // const headerss = { 'Accept': '*/*', 'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryyEmKNDsBKjB7QEqu'}
    
    return this._http.delete('https://localhost:44396/api/User?id=' + dataUser.id);
  }

  patchUser(dataUser, photo) {
    return this._http.put(`https://localhost:44396/api/User?Id=${dataUser.id}&BirthdayDate=${dataUser.birthdayDate}&Fio=${dataUser.fio}&Photo=${dataUser.photo}`, photo);
    //return this._http.put(`https://localhost:44396/api/User`, dataUser);
  }

  addUser(dataUser, photo) {
    return this._http.post(`https://localhost:44396/api/User?BirthdayDate=${dataUser.birthdayDate}&Fio=${dataUser.fio}&Photo=${dataUser.photo}`, photo);
  }

  getUpcomingBirthdays() {
    return this._http.get('https://localhost:44396/api/User/UpcomingBirthdays');
  }
}
