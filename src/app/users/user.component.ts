import{Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from './user.services';


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

    constructor(private userservice:UserService){}


    OnSubmit(form: NgForm){
        this.userservice.registerUser(form.value).subscribe((data)=> {
            if (data.status == 201) form.reset()
        });
        console.log(this.erroress, form.value)

    }
    
}