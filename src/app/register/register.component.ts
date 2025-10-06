import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user.model';
import { Router } from '@angular/router'; // Corrigé ici
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  public user = new User();
  confirmPassword?: string;
  myForm!: FormGroup;
  err: any;
  loading : boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  onRegister() {
    this.loading=true;
    console.log(this.user);
    this.authService.registerUser(this.user).subscribe({
      next: (res) => {
        this.authService.setRegistredUser(this.user);
        // alert('Veuillez confirmer votre email');
        this.loading=false;
        this.toastr.success('veillez confirmer votre email', 'Confirmation');
        this.router.navigate(['/verifEmail']); // Utilisation correcte de navigate
      },
      error: (err: any) => {
        this.loading=false;
        if (err.error.errorCode == 'USER_EMAIL_ALREADY_EXISTS') {
          this.err = 'Email already used';
        }
      },
    });
  }
}
