import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-confirmar-presenca',
  templateUrl: './confirmar-presenca.component.html',
  styleUrls: ['./confirmar-presenca.component.css'],
  standalone: true,
})
export class ConfirmarPresencaComponent implements OnInit {
  showModal = false;

  ngOnInit() {}

  confirmarPresenca() {
    this.showModal = true;
  }

  fecharModal() {
    this.showModal = false;
  }
}
