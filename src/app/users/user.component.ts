import{Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from './user.services';
import{ToastrService, ToastrModule} from 'ngx-toastr';
import{Observable, of} from 'rxjs';



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

    constructor(private userservice:UserService, public toaster:ToastrService){}


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
        console.log('inside login form');
        this.userservice.LoginUser(form.value).subscribe((data) => {
            if (data.status == 201)
            {
                form.reset();
                this.toaster.success('Login Successfull');
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
    
}