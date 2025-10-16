import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton,IonToast, IonItem, IonInputPasswordToggle } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonToast, IonItem, IonInputPasswordToggle]
})
export class RegisterPage implements OnInit {

  usuario: string = '';
  usuariopassword: string = '';
  isToastOpen: Boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  register() {
    localStorage.setItem("usuario",this.usuario);
    localStorage.setItem("usuariopassword",this.usuariopassword);


    this.router.navigateByUrl("/login");
  }
}
