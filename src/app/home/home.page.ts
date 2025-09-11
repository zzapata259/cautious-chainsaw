import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton , IonMenu, IonButtons,IonLabel, IonIcon, IonList, IonItem,IonListHeader} from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader,IonToolbar,IonTitle,IonContent,IonButtons,IonMenu,IonMenuButton, IonLabel, IonIcon, IonList, IonItem, IonListHeader,RouterModule
  ]
})
export class HomePage {
  constructor() {}
}
