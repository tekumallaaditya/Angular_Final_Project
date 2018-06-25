import{Component} from '@angular/core';
import{NgForm} from '@angular/forms';


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
    
}