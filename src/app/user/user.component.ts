import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userlist : User[] = [
    new User(1,"nina", "nina@mailme.com"),
    new User(2,"mina", "mina@mailme.com"),
    new User(3,"lala", "lala@mailme.com"),
    new User(4,"liry", "liry@mailme.com")

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
