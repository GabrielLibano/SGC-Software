import { Component, forwardRef, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CommonModule } from '@angular/common';
import { NgxDropdownConfig } from 'ngx-select-dropdown';
@Component({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, FormsModule],
    selector: 'app-listarCursos',
    templateUrl: './listar-cursos.component.html',
    styleUrl: './listar-cursos.component.css',
    standalone: true,
  })
  export class ListarCursos implements OnInit {
    constructor(private router: Router, private fb: FormBuilder) {
    }
    ngOnInit() {
    }
}