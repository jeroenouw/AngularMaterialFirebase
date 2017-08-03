import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private authService: AuthService,
                private router: Router) {}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['/login']);
            return false;
        } else {
            return true;
        }
    }
}
