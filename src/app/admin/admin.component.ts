import{Component} from '@angular/core';
import{NgForm} from '@angular/forms';
import {Router} from "@angular/router";
import { AdminServices } from './admin.services';
import{ToastrService, ToastrModule} from 'ngx-toastr';


@Component({
    selector:'admin-app',
    templateUrl:'./admin.component.html'
})

export class AdminComponent{
    fname:string;
    lname:string;
    email:string;
    UnameAdmin:string;
    passAdmin:string;

    constructor(private router: Router, private admin: AdminServices, public toaster:ToastrService){}

    Userpage(){
        this.router.navigate(['/user']);

    }
    AdminLogin(form: NgForm){
        console.log(form.value);
        this.UnameAdmin = form.value.Uname;
        this.admin.login(form.value).subscribe((data) =>{
            if (data.status == 201)
            {
                this.admin.setUserLoggedIn();
                form.reset();
                this.toaster.success('Login Successfull');
                //this.GetUserInfo = this.userservice.PullUserInfo(this.UnameUser);
                //console.log(this.userservice.PullUserInfo(this.UnameUser), 'this.GetUserInfo')
                this.router.navigate(['/adminlist',{Uname: this.UnameAdmin}]);
                //this.toaster.error('failed');
                console.log(data.status);
                console.log(data.statusText);
            }
            else if( data.status == 293)
            {
                this.toaster.error('Login Failed');
                console.log(data.statusText, data.status)

            }
        })
    }
    
}