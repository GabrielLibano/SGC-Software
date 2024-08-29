import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports:[FormsModule],
})
export class LoginComponent implements OnInit{
  model: Login = new Login();

  constructor(private router: Router, private toast: ToastrService){}
  ngOnInit() {
    
  }

  login(model: any){
    console.log(model)
      if(model.user == "123" && model.password == "123"){
        this.router.navigate(['/dashboard'])
      }else{
        this.toast.warning("Credenciais invalidas", "Tente novamente")
      }
  }

  onSubmit(model: Login) {
    console.log(model);
  }

}