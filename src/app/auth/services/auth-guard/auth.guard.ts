import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  
  constructor(
    private auth:AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const userObs = this.auth.authState;
    let currentState:RouterStateSnapshot  = state;
    return userObs.pipe(
      map(user => {
        return !!user;
      }),
      tap(loggedIn => {
        if (!loggedIn) {
          this.auth.state = currentState;
          const userData = this.auth.currentUser;
          if (!userData) {
            // Session does NOT EXISTS so redirect to public app login page
            this.router.navigate(['/login']);
          }
        }
      })
    );
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.canActivate(route, state);
  }
  
}
