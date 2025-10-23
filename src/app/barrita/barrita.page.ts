import { CommonModule } from '@angular/common';
import { IonicModule, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader,IonToolbar,IonTitle,IonContent,IonMenuButton,IonMenu,IonButtons,IonLabel, IonIcon,IonList,IonItem,IonListHeader,IonButton,
IonGrid,IonRow,IonCol,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonChip, IonAvatar,IonNote,} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { Barrita, Database } from 'src/app/services/database';

@Component({
  selector: 'app-barrita',
  templateUrl: './barrita.page.html',
  styleUrls: ['./barrita.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    // Ionic components
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenu,
    IonMenuButton,
    IonLabel,
    IonIcon,
    IonList,
    IonItem,
    IonListHeader,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonChip,
    IonAvatar,
    IonNote,
  ],
})
export class BarritaPage {
   // 🟢 Variables
  barritas: Barrita[] = [];
  carrito: Barrita[] = [];

  constructor(private toastCtrl: ToastController, private database : Database) {
    this.inicializarBD();
    this.obtenerTodasBarritas();
  }
  // 🔹 Obtiene las barritas desde la BD
  async obtenerTodasBarritas() {
    this.barritas = await this.database.obtenerTodasBarritas();
    console.log('📦 Barritas cargadas:', this.barritas);
  }

  // 🧩 Cuando se carga la página
  async ngOnInit() {
    await this.obtenerTodasBarritas();
  }

  async inicializarBD() {
    this.barritas = await this.database.obtenerBarritas();
  }

  async agregarAlCarrito(barrita: Barrita) {
    this.carrito.push(barrita);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));

    const toast = await this.toastCtrl.create({
      message: `${barrita.nombre} agregada al carrito`,
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
