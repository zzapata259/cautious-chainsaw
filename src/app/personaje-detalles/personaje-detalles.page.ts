import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-personaje-detalles',
  templateUrl: './personaje-detalles.page.html',
  styleUrls: ['./personaje-detalles.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PersonajeDetallesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
