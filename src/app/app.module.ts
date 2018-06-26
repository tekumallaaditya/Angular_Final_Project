import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router';
import{HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './users/user.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './users/user.services';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    
  ],
  imports: [
    BrowserModule,     
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'admin', component:AdminComponent},
      {path:'user', component:UserComponent}
      
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
