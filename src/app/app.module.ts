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
import { ContactListPipe } from './users/sort.contacts';
import { AuthGuard } from './users/auth.guard';
import { AdminServices } from './admin/admin.services';
import { AdminLoginComponent } from './admin/adminLogin.component';
import { AuthGuardAdmin } from './admin/authAdmin.guard';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminLoginComponent,
    UserComponent,
    UserListComponent,
    ContactListPipe
    
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
      {path:'', redirectTo: '/user', pathMatch: 'full'},
      //{path:'/', redirectTo: '/user', pathMatch: 'full'},
      {path:'admin', component:AdminComponent},
      {path:'adminlist',canActivate: [AuthGuardAdmin], component:AdminLoginComponent},
      {path:'user', component:UserComponent},
      {path:'contacts',canActivate: [AuthGuard], component:UserListComponent}
      
    ])
  ],
  providers: [UserService, AuthGuard, AdminServices, AuthGuardAdmin],
  bootstrap: [AppComponent]
})
export class AppModule { }
