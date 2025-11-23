import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {

}
