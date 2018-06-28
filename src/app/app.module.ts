import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router';
import{HttpModule} from '@angular/http';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './users/user.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './users/user.services';
import {ToastrModule} from 'ngx-toastr';
import { UserListComponent } from './users/userLogin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    UserListComponent
    
  ],
  imports: [
    BrowserModule,     
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      onActivateTick:true
    }),
    RouterModule.forRoot([
      {path:'admin', component:AdminComponent},
      {path:'user', component:UserComponent},
      {path:'contacts', component:UserListComponent}
      
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
