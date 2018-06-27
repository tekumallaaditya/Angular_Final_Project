import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
//import{Observable} from 'rxjs/Observable';
//import { observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { User, UserLogin } from './users.model';


@Injectable()

export class UserService{

    private _listUrl = "http://localhost:5000/"
    private _listLoginUrl = "http://localhost:5000/user"
    constructor( private http:Http){}

    registerUser(user){
        const body: User = {
            Fname : user.Fname,
            Lname : user.Lname,
            Email : user.email,
            Uname : user.UnameReg,
            Password : user.PasswordReg
            
        }
        return this.http.post(this._listUrl, body);

    }
    LoginUser(user){
        const body: UserLogin = {
            Uname: user.Uname,
            Password: user.Password
        }
        return this.http.post(this._listLoginUrl, body);
    }
}