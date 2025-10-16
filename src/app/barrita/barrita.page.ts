import { CommonModule } from '@angular/common';
import { IonicModule, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader,IonToolbar,IonTitle,IonContent,IonMenuButton,IonMenu,IonButtons,IonLabel, IonIcon,IonList,IonItem,IonListHeader,IonButton,
IonGrid,IonRow,IonCol,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonChip, IonAvatar,IonNote,} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { Database } from 'src/app/services/database';


interface Barrita {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

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
  barritas: Barrita[] = [
    {
      id: 1,
      nombre: 'Barrita Power Choco',
      descripcion: 'Deliciosa barrita de chocolate con 20g de proteína whey.',
      precio: 2500,
      imagen: 'assets/img/power-choco.png'
    },
    {
      id: 2,
      nombre: 'Barrita Fit Vainilla',
      descripcion: 'Barrita ligera sabor vainilla con 18g de proteína vegetal.',
      precio: 2200,
      imagen: 'assets/img/fit-vainilla.png'
    },
    {
      id: 3,
      nombre: 'Barrita Berry Boost',
      descripcion: 'Energía natural con frutos rojos y 15g de proteína.',
      precio: 2800,
      imagen: 'assets/img/berry-boost.png'
    },
    {
      id: 4,
      nombre: 'Barrita Coco Crunch',
      descripcion: 'Crujiente barrita sabor coco con 21g de proteína aislada.',
      precio: 3000,
      imagen: 'assets/img/coco-crunch.png'
    }
  ];

  carrito: Barrita[] = [];

  constructor(private toastCtrl: ToastController, private database : Database) {}

  async inicializarBD() {
    await this.database.insertarUsuario();
    this.usuarios = await this.database.obtenerUsuarios();
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
