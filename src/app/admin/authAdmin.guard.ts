import {Injectable} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AdminServices} from './admin.services';



@Injectable()

export class AuthGuardAdmin implements CanActivate {

    constructor(private user:AdminServices){}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return this.user.getUserLoggedIn();
           }
    
}