import{Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from './user.services';
import{ToastrService, ToastrModule} from 'ngx-toastr';
import {Router} from "@angular/router";
import { GetUserInfo } from './users.model';



@Component({
    selector:'user-app',
    templateUrl:'./user.component.html'
})

export class UserComponent{
    FnameUser:string;
    LnameUser:string;
    EmailUser:string;
    UnameUser:string;
    PassUser:string;
    UnameLogin:string;
    PassLogin:string;
    erroress:any;
    errorMessage:string;

    GetUserInfo: any;

    constructor(private userservice:UserService, public toaster:ToastrService, private router: Router){}


    OnSubmit(form: NgForm){
        this.userservice.registerUser(form.value).subscribe((data)=> {
            if (data.status == 201)
            {
                form.reset();
                this.toaster.success('User registration Successfull');
                //this.toaster.error('failed');
                console.log(data.status);
                console.log(data.statusText);
            }
            else if( data.status == 293)
            {
                this.toaster.error('UserName already exists');
                console.log(data.statusText, data.status)

            }
            
                      
             
        });
        

    }
    OnLogin(form: NgForm){
        console.log(form.value.Uname);
        this.UnameUser = form.value.Uname;
        this.userservice.LoginUser(form.value).subscribe((data) => {
            if (data.status == 201)
            {
                this.userservice.setUserLoggedIn();
                form.reset();
                this.toaster.success('Login Successfull');
                //this.GetUserInfo = this.userservice.PullUserInfo(this.UnameUser);
                //console.log(this.userservice.PullUserInfo(this.UnameUser), 'this.GetUserInfo')
                this.router.navigate(['/contacts',{Uname: this.UnameUser}]);
                //this.toaster.error('failed');
                console.log(data.status);
                console.log(data.statusText);
            }
            else if( data.status == 293)
            {
                this.toaster.error('Login Failed');
                console.log(data.statusText, data.status)

            }

        });
    }

    GOtoAdmin(){
        this.router.navigate(['/admin']);
    }

    
    
    
}