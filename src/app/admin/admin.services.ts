import{Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import{Observable} from 'rxjs/Observable';  
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AdminLogin } from './admin.modal';

@Injectable()


export class AdminServices{

    private _listLoginUrl = "http://localhost:5000/admin";
    private IsAdminLoggedIn;

    constructor(private http: Http){
        this.IsAdminLoggedIn = false;
    }

    setUserLoggedIn(){ this.IsAdminLoggedIn = true;}
    getUserLoggedIn(){return this.IsAdminLoggedIn;}

    login(user){
        const body: AdminLogin = {
            Uname: user.Uname,
            Password: user.password            
        }
        console.log('in services', body)
        return this.http.post(this._listLoginUrl, body);

    }




}