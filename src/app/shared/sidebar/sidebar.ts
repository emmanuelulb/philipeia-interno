import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent {

  constructor(private router: Router) { }

  // Função para lidar com a navegação ao clicar nos botões
  goToRoute(route: string): void {
    this.router.navigate([route]);
  }
}