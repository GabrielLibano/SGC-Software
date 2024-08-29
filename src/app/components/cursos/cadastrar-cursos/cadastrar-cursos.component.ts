import { Component, forwardRef, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CommonModule } from '@angular/common';
import { NgxDropdownConfig } from 'ngx-select-dropdown';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { CadastroDeCursosModel } from '../../../models/cadastroCurso';
import { CadastrarCursosService } from '../../../services/cadastroCurso.service';

@Component({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FormsModule],
  selector: 'app-login',
  templateUrl: './cadastrar-cursos.component.html',
  styleUrl: './cadastrar-cursos.component.css',
  standalone: true,
  schemas: [NO_ERRORS_SCHEMA],
})
export class CadastrarCursos implements OnInit {
  data: string ='';
  codigo: number = 0;
  equipes:  any[] = [];
  nomeCurso: string = '';
  options = [
    { id: 1, name: 'T.I' },
    { id: 2, name: 'Meio ambiente' },
    { id: 3, name: 'Farmacêuticos' },
  ];
  isOpen = false;
  selectedOptions: any[] = [];
  constructor(private toast: ToastrService) {}


  ngOnInit() {
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  toggleSelection(option: any) {
    const index = this.selectedOptions.indexOf(option);
    if (index > -1) {
      this.selectedOptions.splice(index, 1);
    } else {
      this.selectedOptions.push(option);
    }
  }
  onSubmit(){
    this.equipes = this.selectedOptions;
    if(this.equipes.length > 0 && this.data !== "" && this.nomeCurso !== "")
      this.toast.success("O ID deste curso é o 7", "Curso cadastrado com sucesso!");
    else
      this.toast.warning("Preencha todos os campos", "Não foi possivel cadastrar o curso");
  }
}