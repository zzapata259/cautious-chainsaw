import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader,IonToolbar,IonTitle,IonContent,IonMenuButton,IonMenu,IonButtons,IonLabel, IonIcon,IonList,IonItem,IonListHeader,IonButton,
IonGrid,IonRow,IonCol,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonChip, IonAvatar,IonNote,} from '@ionic/angular/standalone';
import { Barrita, Database } from 'src/app/services/database';
import { RouterModule } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin-barritas',
  templateUrl: './admin-barritas.page.html',
  styleUrls: ['./admin-barritas.page.scss'],
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
export class AdminBarritasPage implements OnInit {

  barritas: Barrita[] = [];

  // Variables para un formulario simple
  nuevaBarrita: Partial<Barrita> = {
    nombre: '',
    descripcion: '',
    precio: 0,
    imagen: ''
  };

  constructor(
    private database: Database,
    private toastCtrl: ToastController
  ) {}

  async ngOnInit() {
    await this.inicializarBD();
  }

  async inicializarBD() {
    await this.database.crearBD();
    this.barritas = await this.database.obtenerTodasBarritas();
  }

  // 🆕 Método para insertar una nueva barrita
  async insertarBarrita() {
    try {
      // Validación básica
      if (!this.nuevaBarrita.nombre || !this.nuevaBarrita.descripcion || !this.nuevaBarrita.precio) {
        const toast = await this.toastCtrl.create({
          message: 'Por favor, completa todos los campos.',
          duration: 2000,
          color: 'warning'
        });
        toast.present();
        return;
      }

      // Convierte Partial<Barrita> a Barrita, omitiendo el id porque es autoincremental
      const barritaToInsert: Omit<Barrita, 'id'> = {
        nombre: this.nuevaBarrita.nombre,
        descripcion: this.nuevaBarrita.descripcion,
        precio: this.nuevaBarrita.precio,
        imagen: this.nuevaBarrita.imagen || ''
      };

      // Inserta en la base de datos
      await this.database.insertarBarrita(barritaToInsert as Barrita);

      // Recarga la lista para actualizar la vista
      this.barritas = await this.database.obtenerTodasBarritas();

      // Limpia el formulario
      this.nuevaBarrita = { nombre: '', descripcion: '', precio: 0, imagen: '' };

      const toast = await this.toastCtrl.create({
        message: 'Barrita insertada correctamente.',
        duration: 2000,
        color: 'success'
      });
      toast.present();

    } catch (error) {
      console.error('Error al insertar barrita:', error);
      const toast = await this.toastCtrl.create({
        message: 'Error al insertar barrita.',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
  }
}
