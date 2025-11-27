import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process-graph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process-graph.html',
  styleUrls: ['./process-graph.css']
})
export class ProcessGraphComponent {

  processData = [
    { label: 'NOVOS PEDIDOS CADASTRADOS', count: 40, color: '#FF6A00' },
    { label: 'PEDIDOS EM PRODUÇÃO', count: 25, color: '#f0ad4e' },
    { label: 'PEDIDOS EM PROCESSO DE ENTREGA', count: 35, color: '#CC5500' }
  ];

  constructor() { }
}