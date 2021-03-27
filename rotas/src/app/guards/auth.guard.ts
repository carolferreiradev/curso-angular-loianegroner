import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService,
    private router: Router) { }

  verificarAcesso() {

    if (this.authService.usuarioEstaAutenticado()) {
      return true
    }
    this.router.navigate(['/login']);
    return false

  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    console.log('Verficando se o usuario pode carregar o código do módulo')
    return this.verificarAcesso()
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {

    return this.verificarAcesso()

  }
}
