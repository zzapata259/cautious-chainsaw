import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton , IonMenu, IonButtons,IonLabel, IonIcon, IonList, IonItem,IonListHeader} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
  standalone: true,
  imports: [IonHeader,IonToolbar,IonTitle,IonContent,IonButtons,IonMenu,IonMenuButton, IonLabel, IonIcon, IonList, IonItem, IonListHeader, RouterModule]
})
export class Home2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
