import{Component} from '@angular/core';
import{NgForm} from '@angular/forms';
import {Router, ParamMap, ActivatedRoute} from "@angular/router";
import { AdminServices } from './admin.services';
import{ToastrService, ToastrModule} from 'ngx-toastr';

@Component({
    selector: 'admin-login',
    templateUrl: './adminLogin.component.html'
})


export class AdminLoginComponent {
    Aname:string;
    AdminInfo:string;
    errorMessage:string;

    constructor(private route: ActivatedRoute,private router: Router, private toaster: ToastrService){}
    

    LogoutAdmin(){
        this.router.navigate(['/admin']);
        this.toaster.success('Log out successfull');
    }


}