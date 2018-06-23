import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './users/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'admin', component:AdminComponent},
      {path:'user', component:UserComponent}
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
