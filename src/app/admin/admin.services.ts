import{Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import{Observable} from 'rxjs/Observable';  
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AdminLogin, AdminList, User } from './admin.modal';
import { map } from 'rxjs/operators';

@Injectable()


export class AdminServices{

    private _listLoginUrl = "http://localhost:5000/admin";
    private _listUrl = "http://localhost:5000/";
    private IsAdminLoggedIn;
    AdminList:AdminList[];

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
    getAdminList():Observable<AdminList[]>{
        console.log(this.http.get(this._listUrl))
        return this.http.get(this._listUrl).map((response) => response.json()).catch(this.handleError)     
        

    }   

    private handleError(error:Response){
        return Observable.throw(error.json().error || "server error")
    } 
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
    deleteuser(user){
        return this.http.post(this._listUrl + 'admindel', user)
    }




}