import{Component, OnInit} from '@angular/core';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { UserService } from './user.services';
import { GetUserInfo, extractUser } from './users.model';
import { NgForm } from '@angular/forms';
import{ToastrService, ToastrModule} from 'ngx-toastr';

@Component({
    selector:'user-list',
    templateUrl:'./userLogin.component.html'
})

export class UserListComponent implements OnInit{
    Uname:string;
    Fname:string;
    Lname:string;
    ContactName:string;
    ContactNumber:number;
    Delcontactname:string;
    ContactList:any;
    UserInfo :GetUserInfo[];
    extractInfo:extractUser;
    errorMessage:string;
    ContactListLength:number;
    ContactListArray:number[] = [];

    constructor(private route: ActivatedRoute, private userSerice: UserService, public toaster:ToastrService) {}

    ngOnInit(): void {
        this.Uname = this.route.snapshot.paramMap.get('Uname');
        this.userSerice.PullUserInfo().subscribe((data) => {
           //console.log(data)
            this.UserInfo = data,
            (err) => this.errorMessage = err;
            for (let each of data){
                for (let key in each){
                    if (key == this.Uname){
                        console.log('inside condition', key, each[key]);
                        this.extractInfo = each[key]; 
                        var x = new Array();
                        x = this.extractInfo.ContactList.split(',');
                        this.ContactListLength = x.length;
                                                
                        for (var i = 0; i < this.ContactListLength; i++) {
                            this.ContactListArray.push(i);
                         }                       
                        console.log( 'array is->', this.ContactListLength, this.ContactListArray  )
                    }
                }
            }
           
            });
        console.log(this.route.snapshot.paramMap.get('Uname'), 'outside subscribe',this.extractInfo);
        
    }
    AddContact(form: NgForm){
        console.log(form.value.contactname)
        this.userSerice.AddUserContact(form.value, this.Uname).subscribe((data) =>{
            if (data.status == 201)
            {
                this.toaster.success('New Contact Added. Please refresh the page')
                console.log('adding contact successfull', data.status)
            }
            else
            {
                this.toaster.error('Failed to add the new contact')
                console.log('adding contact failed', data.status)
            }
        });

    }
}