import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrl: './account.component.css',
    standalone: true,
    imports:[FormsModule],
  })
  export class AccountComponent implements OnInit{
    model: Login = new Login();
  
    constructor(private router: Router){}
    ngOnInit() {
      
    }
}