// src/app/components/process-graph/process-graph.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para o *ngFor no template

@Component({
  selector: 'app-process-graph',
  standalone: true,
  imports: [CommonModule], // Adicionar CommonModule
  templateUrl: './process-graph.html',
  styleUrls: ['./process-graph.css']
})
export class ProcessGraphComponent {

  // Dados para as legendas e simulação do gráfico (simulando percentuais/contagens)
  processData = [
    { label: 'NOVOS PEDIDOS CADASTRADOS', count: 40, color: '#FF6A00' }, // Laranja principal
    { label: 'PEDIDOS EM PRODUÇÃO', count: 25, color: '#f0ad4e' },      // Laranja mais claro
    { label: 'PEDIDOS EM PROCESSO DE ENTREGA', count: 35, color: '#CC5500' } // Laranja mais escuro
  ];

  constructor() { }
}