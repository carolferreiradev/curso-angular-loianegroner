import { IFormCandActivate } from './iform-candeactivate';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class AlunosCanDeactivateGuard implements CanDeactivate<IFormCandActivate> {

  constructor() { }

  canDeactivate(
    component: IFormCandActivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    console.log('Alunos guard')
    return component.podeDesativar();
  }
}
