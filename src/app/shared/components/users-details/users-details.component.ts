import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUsers } from '../../models/users';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {

  getUserObj !: IUsers;
  getUserId !: string;

  constructor(
    private _userService : UsersService,
    private _routes : ActivatedRoute,
    private _matDialog : MatDialog,
    private _snackBarService : SnackbarService
  ) { }

  ngOnInit(): void {
    this.getUserId = this._routes.snapshot.params['userId'];
    this.userObj();
  }

  userObj(){
    this._userService.getUsersObj(this.getUserId)
              .subscribe(res => {
                this.getUserObj = res;
              })
  }

  onRemove(){
    let matConfig = new MatDialogConfig()
    matConfig.data = `Are you sure, you want to remove ${this.getUserObj.name} ???`
    this._matDialog.open(GetConfirmComponent, matConfig)
        .afterClosed().subscribe(res => {
          if(res){
            this._userService.removeUser(this.getUserObj);
            this._snackBarService.openSnackBar(`${this.getUserObj.name} Removed Successfulyy !!`)
          }
        })
  }

}
