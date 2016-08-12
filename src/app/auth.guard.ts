import { Injectable }             from '@angular/core';
import { CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot }    from '@angular/router';
import { AuthService }            from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(
    // Not using but worth knowing about
    next:  ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    console.log('In AuthGuard - this.authService.isLoggedIn=' + this.authService.isLoggedIn);

    if (this.authService.isLoggedIn) {
      return true;
    }
    else {
      this.router.navigate(['/entity']);
      return false;
    }
  }
}
