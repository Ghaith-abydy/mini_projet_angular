import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-verif-email',
  templateUrl: './verif-email.component.html',
  styleUrls: ['./verif-email.component.css'], // Corrigé en 'styleUrls'
})
export class VerifEmailComponent implements OnInit {
  code: string = '';
  user: User = new User();
  err = '';

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Récupérer l'utilisateur enregistré depuis AuthService
    this.user = this.authService.regitredUser;
  }

  onValidateEmail(): void {
    // Appel au service pour valider l'email
    this.authService.validateEmail(this.code).subscribe({
      next: (res) => {
        alert('Login successful');
        this.authService.login(this.user).subscribe({
          next: (data) => {
            // Récupérer le jeton JWT depuis l'en-tête
            const jwToken = data.headers.get('Authorization')!;
            this.authService.saveToken(jwToken);
            // Rediriger vers la page d'accueil
            this.router.navigate(['/']);
          },
          error: (err) => {
            console.error('Login failed', err);
          },
        });
      },
      error: (err) => {
        // Gérer les erreurs de validation d'email
        if (err.error.errorCode == "INVALID_TOKEN") 
          this.err = "Votre code n'est pas valide !";


        if (err.error.errorCode == "EXPIRED_TOKEN") 
          this.err = "Votre code a expiré";
      },
    });
  }
}
