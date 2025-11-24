import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para *ngFor e Pipes
import { Order } from '../../models/order.model'; // Importa o modelo

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule], // Adiciona o CommonModule para usar *ngFor no template
  templateUrl: './order-history.html',
  styleUrls: ['./order-history.css']
})
export class OrderHistoryComponent {

  // O componente PAI (HomeComponent) passará os dados para esta variável
  @Input() orders: Order[] = [];

  // Função para formatar o valor (ex: 10000.00 -> R$ 10.000,00)
  formatValue(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}