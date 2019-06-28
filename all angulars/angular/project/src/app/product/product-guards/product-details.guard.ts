import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // tslint:disable-next-line:prefer-const
      let id = +next.url[1].path;
      if (isNaN(id) || id < 1) {
        alert('invalid product Id');
        this.router.navigate(['./product']);
        return false;
      }
      return true;
  }
}
