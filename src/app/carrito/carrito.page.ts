import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, IonMenu, IonButtons,
  IonLabel, IonIcon, IonList, IonItem, IonListHeader, IonButton,
  IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
  IonChip, IonAvatar, IonNote, IonThumbnail
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { DatabaseCompra, Compra } from '../services/databasecompra'; // Ajusta la ruta según tu proyecto

interface Producto {
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
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
    IonThumbnail,
  ],
})
export class CarritoPage implements OnInit {
  carrito: Producto[] = [];

  constructor(private navCtrl: NavController, private dbCompra: DatabaseCompra) {}

  async ngOnInit() {
    await this.dbCompra.crearBD(); // inicializa la base de datos
    this.cargarCarrito();
  }

  ionViewWillEnter() {
    this.cargarCarrito();
  }

  cargarCarrito() {
    const data = localStorage.getItem('carrito');
    this.carrito = data ? JSON.parse(data) : [];
  }

  eliminarProducto(index: number) {
    this.carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  totalCarrito(): number {
    return this.carrito.reduce((suma, item) => suma + item.precio, 0);
  }

  irAPago() {
    this.navCtrl.navigateForward('/pago');
  }

  // ✅ Nuevo método para guardar compras en la base de datos
  async guardarCompras() {
    for (const producto of this.carrito) {
      const compra: Compra = {
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        precio: producto.precio,
        imagen: producto.imagen
      };
      await this.dbCompra.insertarCompra(compra);
    }
    // Limpiamos el carrito después de guardar
    this.carrito = [];
    localStorage.removeItem('carrito');
    alert('Compras guardadas en la base de datos con éxito ✅');
  }
}
