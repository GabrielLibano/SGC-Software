import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login';
import { Observable, of, fromEvent, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, FormGroupName, NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive]
  })
  export class DashBoardComponent implements OnInit{
    $model: any;
  
    constructor(private router: Router){}
    ngOnInit() {}
  }
