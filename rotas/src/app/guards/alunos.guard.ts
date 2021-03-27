import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export class AlunosGuard implements CanActivateChild {


  constructor() { }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    // if(state.url.includes('editar')){
    //   alert('Usuário não possui permissão para editar')
    //   return false
    // }
    return true;
  }
}
