import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { UuidService } from '../../services/uuid.service';
import { IUsers } from '../../models/users';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {

  userForm !: FormGroup;
  isInEditMode : boolean = false;
  getUserId !: string;

  constructor(
    private _routes : ActivatedRoute,
    private _userService : UsersService,
    private _uuid : UuidService,
    private _snackBarService : SnackbarService
  ) { }

  ngOnInit(): void {
    this.userFormCode();
    this.getUserId = this._routes.snapshot.params['userId'];
    this.editModeSetup();
  }

  editModeSetup(){
    if(this.getUserId){
      this.isInEditMode = true;
      this._userService.getUsersObj(this.getUserId)
              .subscribe(res => {
                let obj = res;
                this.userForm.patchValue(obj);
              })
    }
  }

  userFormCode(){
    this.userForm = new FormGroup({
      name : new FormControl(null, [Validators.required]),
      email : new FormControl(null, [Validators.required]),
      cLocation : new FormControl(null, [Validators.required]),
      role : new FormControl(null, [Validators.required]),
      roleId : new FormControl(null, [Validators.required]),
      phone : new FormControl(null, [Validators.required]),
      isActive : new FormControl(null, [Validators.required]),
      profileImg : new FormControl(null, [Validators.required]),
      bio : new FormControl(null, [Validators.required])
    })
  }

  onFormSubmit(){
    console.log(this.userForm);
    
    if(this.userForm.valid){
      let userObj : IUsers = {...this.userForm.value, id : this._uuid.uuid()}
      console.log(userObj);

      if(userObj.isActive === "yes"){
        userObj.isActive = true
      } else if (userObj.isActive === "no"){
        userObj.isActive = false
      }

      

      this._userService.createNewUser(userObj);
      this._snackBarService.openSnackBar(`New User ${userObj.name} Added successfully !!!`)
    }
  }

  onUpdateHandler(){
    if(this.userForm.valid){
      let userObj : IUsers = {...this.userForm.value, id : this.getUserId}

      if(userObj.isActive === "yes"){
        userObj.isActive = true
      } else if (userObj.isActive === "no"){
        userObj.isActive = false
      }

      this._userService.updateUser(userObj);
      this._snackBarService.openSnackBar(`User ${userObj.name} updated successfully !!`)
    }
  }

}
