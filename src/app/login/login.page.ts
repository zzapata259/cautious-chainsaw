import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonToast, IonItem, IonButton, IonInputPasswordToggle, IonInput, createAnimation } from '@ionic/angular/standalone';
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

  @ViewChild('emailInput',{ read: ElementRef}) emailInput!: ElementRef
  @ViewChild('passwordInput',{ read: ElementRef}) passwordInput!: ElementRef
  constructor(private router: Router) {}


  ngOnDestroy() {}
  ngOnInit() {
    sessionStorage.setItem('isLoggedIn', 'false');
  }

  login(event: Event) {
    event.preventDefault();

    if (this.email === 'jesus.vargas@tinet.cl' && this.password === '123456') {
      this.animateSuccess();
      setTimeout(() => {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('userEmail', this.email);

        this.router.navigateByUrl('/home');
      }, 600);
    } else {
      this.animateError();
      this.isToastOpen = true;
    }
  }
  animateSuccess() {
    const animation = createAnimation()
      .addElement(this.emailInput.nativeElement)
      .addElement(this.passwordInput.nativeElement)
      .duration(400)
      .keyframes([
        { offset: 0, transform: 'scale(1)', background: 'transparent' },
        { offset: 0.5, transform: 'scale(1.05)', background: '#d4edda' },
        { offset: 1, transform: 'scale(1)', background: 'transparent' }
      ]);

    animation.play();
  }

  
  animateError() {
    const animation = createAnimation()
      .addElement(this.emailInput.nativeElement)
      .addElement(this.passwordInput.nativeElement)
      .duration(100)
      .iterations(3)
      .keyframes([
        { offset: 0, transform: 'translateX(0px)' },
        { offset: 0.25, transform: 'translateX(-10px)' },
        { offset: 0.5, transform: 'translateX(10px)' },
        { offset: 0.75, transform: 'translateX(-10px)' },
        { offset: 1, transform: 'translateX(0px)' }
      ]);

    animation.play();
  }
  
  register() {
    console.log('Registrarse pulsado');
    this.router.navigateByUrl('/register');
  }
}
