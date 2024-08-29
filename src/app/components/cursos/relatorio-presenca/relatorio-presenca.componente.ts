import { Component, forwardRef, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CommonModule } from '@angular/common';
import { NgxDropdownConfig } from 'ngx-select-dropdown';


@Component({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FormsModule],
  selector: 'app-relatorioPresenca',
  templateUrl: './relatorio-presenca.component.html',
  styleUrl: './relatorio-presenca.component.css',
  standalone: true,
})
export class RelatorioPresencaComponent implements OnInit {
    lista = [
        { curso: '', participante: '', data: '', statusParticipante: '' },
        { curso: '', participante: '', data: '', statusParticipante: '' }
      ];
  constructor(private router: Router, private fb: FormBuilder) {
  }
  ngOnInit() {
  }
  gerarRelatorio(){
    this.lista = [
        { curso: "Microservices", participante: "Gabriel Libano", data: "20/08/2024", statusParticipante: "Concluido" },
        { curso: "Microservices", participante: "Vinicius da Silva", data: "20/08/2024", statusParticipante: "Não Concluido" },
    ]
  }
}