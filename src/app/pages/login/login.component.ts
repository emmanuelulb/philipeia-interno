import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

  onLogin(): void {
    console.log('Tentativa de Login. Redirecionando para /home...');
    this.router.navigate(['/home']); 
  }

  onCadastro(): void {
    console.log('Redirecionando para Cadastro...');

    alert('Funcionalidade de Cadastro em desenvolvimento!');
  }
}