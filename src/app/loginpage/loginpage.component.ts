import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.scss'
})
export class LoginpageComponent {
  constructor(private route:Router){

  }

onLogin(){
  this.route.navigate(['reg'])
  

}
username: string = '';
password: string = '';

onSubmit() {
  if (this.username && this.password) {
    // Handle login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
}

