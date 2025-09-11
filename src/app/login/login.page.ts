import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonToast, IonItem, IonButton, IonInputPasswordToggle, IonInput } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonItem, IonButton, IonInput, IonInputPasswordToggle, IonToast]
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';
  isToastOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  login() {
    console.log(this.email);
    console.log(this.password);

    let usuario = localStorage.getItem("usuario");
    let usuariopassword = localStorage.getItem("usuariopassword");

    if (this.email === usuario && this.password === usuariopassword) {
      this.router.navigateByUrl('/home');
    } else {
      this.isToastOpen = true;
    }
    this.router.navigateByUrl("/home");
  }

}
