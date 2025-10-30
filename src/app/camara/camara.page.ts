import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonSpinner, IonLabel, IonItem, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
  standalone: true,
  imports: [IonSpinner, CommonModule, IonLabel, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterModule, IonButtons, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle]
})
export class CamaraPage implements OnInit {
  foto: string | undefined;

  constructor() { }

  ngOnInit() {
  }
  async tomarFoto() {
    const imagen = await Camera.getPhoto({
      quality: 80, // calidad de la foto (0-100)
      resultType: CameraResultType.Uri, // queremos una URL, no base64
      source: CameraSource.Prompt, // pregunta si usar cámara o galería
    });

    this.foto = imagen.webPath; // ruta para mostrar la imagen
  }

}
