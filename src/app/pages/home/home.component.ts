import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/sidebar/sidebar';
import { OrderHistoryComponent } from '../../components/order-history/order-history.component';
import { ProcessGraphComponent } from '../../components/process-graph/process-graph.component';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, OrderHistoryComponent, ProcessGraphComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {

  orders: Order[] = [
    {
      id: 1,
      clientName: 'Empresa Exemplo',
      value: 1200.5,
      cnpj: '12.345.678/0001-90',
      status: 'Entregue',
      dateMade: new Date(2025, 0, 10),
      deliveryDate: new Date(2025, 0, 15)
    },
    {
      id: 2,
      clientName: 'Cliente Teste',
      value: 540.0,
      cnpj: '987.654.321-00',
      status: 'Em produção',
      dateMade: new Date(2025, 1, 5),
      deliveryDate: new Date(2025, 1, 20)
    }
  ];

  

}
