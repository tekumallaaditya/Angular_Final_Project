import{Component, OnInit} from '@angular/core';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { UserService } from './user.services';
import { GetUserInfo, extractUser } from './users.model';

@Component({
    selector:'user-list',
    templateUrl:'./userLogin.component.html'
})

export class UserListComponent implements OnInit{
    Uname:string;
    Fname:string;
    Lname:string;
    ContactList:any;
    UserInfo :GetUserInfo[];
    extractInfo:extractUser;
    errorMessage:string;
    ContactListLength:number;

    constructor(private route: ActivatedRoute, private userSerice: UserService) {}

    ngOnInit(): void {
        this.Uname = this.route.snapshot.paramMap.get('Uname');
        this.userSerice.PullUserInfo().subscribe((data) => {
           console.log(data)
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
                        console.log(this.extractInfo)
                    }
                }
            }
           
            });
        console.log(this.route.snapshot.paramMap.get('Uname'), 'outside subscribe',this.extractInfo);
        
    }
}