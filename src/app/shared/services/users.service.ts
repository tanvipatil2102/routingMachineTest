import { Injectable } from '@angular/core';
import { IUsers } from '../models/users';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 usersArray : Array<IUsers> = [
  {
    id: '1',
    name: "Shravani Patil",
    email: "Shravani.patil@example.com",
    role: "Administrator",
    roleId: "admin001",
    bio: "Tech enthusiast and front-end developer with a passion for clean UI and user experience. Leads the development team.",
    phone: "+91-1234567890",
    profileImg: "https://randomuser.me/api/portraits/women/65.jpg",
    cLocation: "Udgir, Maharashtra, India",
    isActive: true
  },
  {
    id: '2',
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    role: "Editor",
    roleId: "editor002",
    bio: "Experienced content strategist and editor. Ensures all published content meets quality and style guidelines.",
    phone: "+91-9988776655",
    profileImg: "https://randomuser.me/api/portraits/men/32.jpg",
    cLocation: "Pune, India",
    isActive: true
  },
  {
    id: '3',
    name: "Neha Kulkarni",
    email: "neha.kulkarni@example.com",
    role: "Contributor",
    roleId: "contributor003",
    bio: "Freelance writer and creative thinker. Contributes regularly to blogs and manages social content.",
    phone: "+91-9876543210",
    profileImg: "https://randomuser.me/api/portraits/women/58.jpg",
    cLocation: "Mumbai, India",
    isActive: false
  },
  {
    id: '4',
    name: "Amit Deshmukh",
    email: "amit.deshmukh@example.com",
    role: "Subscriber",
    roleId: "subscriber004",
    bio: "Active community member and regular reader of our content. Loves learning about new tech trends.",
    phone: "+91-8765432109",
    profileImg: "https://randomuser.me/api/portraits/men/45.jpg",
    cLocation: "Nashik, India",
    isActive: true
  },
  {
    id: '5',
    name: "Sakshi Verma",
    email: "sakshi.verma@example.com",
    role: "Moderator",
    roleId: "moderator005",
    bio: "Handles community moderation and ensures a healthy discussion environment. Detail-oriented and prompt.",
    phone: "+91-9090909090",
    profileImg: "https://randomuser.me/api/portraits/women/44.jpg",
    cLocation: "Nagpur, India",
    isActive: false
  }
];
  constructor(
    private _router : Router
  ) { }

  fetchAllUsers(): Observable<Array<IUsers>>{
    return of(this.usersArray)
  }

  createNewUser(userObj : IUsers){
    this.usersArray.unshift(userObj);
    this._router.navigate(['users']);
  }

  getUsersObj(id : string): Observable<IUsers>{
    return  of(this.usersArray.find(obj => obj.id === id) as IUsers)
  }

  updateUser(userObj : IUsers){
    let getIndex = this.usersArray.findIndex(obj => obj.id === userObj.id)
    this.usersArray[getIndex] = userObj;
    this._router.navigate(['users']);
  }

  removeUser(userObj : IUsers){
    let getIndex = this.usersArray.findIndex(obj => userObj.id === obj.id)
    this.usersArray.splice(getIndex, 1);
    this._router.navigate(['users']);
  }
}
