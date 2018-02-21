import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// �ȉ��ǉ���������
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from './../services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.user.pipe(
      take(1),
      map(user => !!user), // user���擾�ł����ꍇ��true��Ԃ�
      tap(loggedIn => {
        if (!loggedIn) {
          this.router.navigate(['/loggin']);
        }
      })
    );
  }
}