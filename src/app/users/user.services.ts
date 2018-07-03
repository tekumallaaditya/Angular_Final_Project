import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import{Observable} from 'rxjs/Observable';  
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User, UserLogin, GetUserInfo, AddContact } from './users.model';


@Injectable()

export class UserService{
    ContactList: any;
    Email:string;
    Fname:string;
    Lname:string;
    id:number;

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
    AddUserContact(contact, user){
        const body: AddContact = {
            ContactName: contact.contactname,
            ContactNumber: contact.contactnumber,
            Uname: user
        }
        return this.http.post(this._listUrl+'add', body)
    }
    PullUserInfo():Observable<GetUserInfo[]>{
        console.log(this.http.get(this._listUrl))
        return this.http.get(this._listUrl).map((response) => response.json()).catch(this.handleError)

    }

    private handleError(error:Response){
        return Observable.throw(error.json().error || "server error")
    } 
}