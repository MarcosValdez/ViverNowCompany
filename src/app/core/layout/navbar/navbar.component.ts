import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  usuarioRegistrado: boolean;

  constructor(private navbarService: NavbarService, private router: Router) {}

  ngOnInit(): void {
    this.navbarService.changeLogin.subscribe((res) => {
      this.usuarioRegistrado = res;
    });
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.navbarService.changeLogin.emit(
        this.navbarService.getIsAuthenticated()
      );
    }, 0);
  }
  login() {
    sessionStorage.setItem('usuario_id', '123');
    this.navbarService.changeLogin.emit(
      this.navbarService.getIsAuthenticated()
    );
    this.router.navigate(['/portafolio']);
  }
  logout() {
    this.navbarService.logout();
  }
}
