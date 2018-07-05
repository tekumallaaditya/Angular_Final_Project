import{Component, OnInit} from '@angular/core';
import{NgForm} from '@angular/forms';
import {Router, ParamMap, ActivatedRoute} from "@angular/router";
import { AdminServices } from './admin.services';
import{ToastrService, ToastrModule} from 'ngx-toastr';
import { AdminList, AdminExt } from './admin.modal';

@Component({
    selector: 'admin-login',
    templateUrl: './adminLogin.component.html'
})


export class AdminLoginComponent {
    Aname:string;
    AdminInfo:string;
    errorMessage:string;
    AdminList: AdminList[];
    //AdminExt: AdminExt[];
    //AdminUname:string[];    
    AdminUname = new Array();
    AdminExt = new Array();
    UnameUserdel:string;
    

    constructor(private route: ActivatedRoute,private router: Router, private toaster: ToastrService, private AdminService: AdminServices){}

    ngOnInit(){
        this.Aname = this.route.snapshot.paramMap.get('Uname')
        this.AdminService.getAdminList().subscribe((data) => {
            console.log(data)
            this.AdminList = data;
            
            for (let each of this.AdminList)
            {
                for (let key in each)
                {
                   console.log('inside for loop', key, 'value is->',each[key])
                   this.AdminUname.push(key)
                   console.log('between here')
                   //var Unameeach = key;
                   var admindict = {Unameeach :key,value: each[key]}
                   this.AdminExt.push(admindict)
                }                
            }
            
            console.log(this.AdminExt[0].value.Email);
            
        })

    }
    

    LogoutAdmin(){
        this.router.navigate(['/admin']);
        this.toaster.success('Log out successfull');
    }
    createuser(form: NgForm){
        console.log('form value is->',form.value)
        this.AdminService.registerUser(form.value).subscribe((data) =>{
            if (data.status == 201)
            {
                form.reset();
                this.toaster.success('create User Successfull');
                //this.toaster.error('failed');
                console.log(data.status);
                console.log(data.statusText);
            }
            else if( data.status == 293)
            {
                this.toaster.error('UserName already exists');
                console.log(data.statusText, data.status)

            }
        })

    }
    Deluser(form: NgForm){
        console.log('del value is->', form.value)
        this.AdminService.deleteuser(form.value).subscribe((data) =>{
            if (data.status == 201)
            {
                this.toaster.success('Selected Contact Deleted. Please refresh the page')
                console.log('Deleting contact successfull', data.status)
            }
            else
            {
                this.toaster.error('Failed to delete the contact')
                console.log('deleting contact failed', data.status)
            }

        })
    }


}