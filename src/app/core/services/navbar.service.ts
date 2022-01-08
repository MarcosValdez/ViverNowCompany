import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  changeLogin = new EventEmitter<boolean>();
  constructor(private router: Router) {
    this.changeLogin.emit(false);
  }

  getIsAuthenticated(): boolean {
    return sessionStorage.getItem('usuario_id') != null;
  }

  logout(): void {
    sessionStorage.removeItem('usuario_id');
    this.changeLogin.emit(this.getIsAuthenticated());
    this.router.navigate(['/']);
  }
}
