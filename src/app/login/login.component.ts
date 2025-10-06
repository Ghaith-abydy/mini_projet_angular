import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: '',
    standalone: false
})
export class LoginComponent implements OnInit{
  user = new User();
  err : number = 0;
  message : String ="login ou mot de passe erronés..";

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    // console.log(this.user);
    // let isValidUser: Boolean = this.authService.SignIn(this.user);
    // if (isValidUser)
    //   this.router.navigate(['/']);
    // else
    //   alert('Login ou mot de passe incorrecte!');
  }

  onLoggedin() {
    this.authService.login(this.user).subscribe({
      next: (data) => {
      let jwToken = data.headers.get('Authorization')!;
      this.authService.saveToken(jwToken);
      this.router.navigate(['/']);
      },
      error: (err: any) => {
        this.err = 1;
        if(err.error.errorCause == "disabled"){
          this.message = "L'utilisateur est désactivé !";
        }
          
      }
      });
       
  }


}
