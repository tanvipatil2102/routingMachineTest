import { Component, OnInit } from '@angular/core';
import { IUsers } from '../../models/users';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.scss']
})
export class UsersDashboardComponent implements OnInit {

  userArr !: Array<IUsers>

  constructor(
    private _userService : UsersService
  ) { }

  ngOnInit(): void {
    this.getUserArr();
  }

  getUserArr(){
     this._userService.fetchAllUsers()
            .subscribe(res => {
              this.userArr = res;
            })
  }

}
