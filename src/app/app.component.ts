import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'MesCombats';
  constructor(public authService: AuthService,
    private router : Router
  ) { }

  ngOnInit() {
    // let isloggedin = localStorage.getItem('isloggedIn');
    // let loggedUser = localStorage.getItem('loggedUser');
    // if (isloggedin != "true" || !loggedUser)
    //   this.router.navigate(['/login']);
    // else
    //   this.authService.setLoggedUserFromLocalStorage(loggedUser);
    if (this.authService.getToken() == null || this.authService.isTokenExpired())
      this.router.navigate(['/login']);

  }
 

  onLogout() {
    this.authService.logout();
  }

}

