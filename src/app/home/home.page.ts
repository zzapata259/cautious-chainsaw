import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton , IonMenu, IonButtons,IonLabel, IonIcon, IonList, IonItem,IonListHeader} from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { Post } from '../services/post';
import { addIcons } from 'ionicons';
import { logOutOutline, starOutline } from 'ionicons/icons';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader,IonToolbar,IonTitle,IonContent,IonButtons,IonMenu,IonMenuButton, IonLabel, IonIcon, IonList, IonItem, IonListHeader,RouterModule
  ]
})
export class HomePage {
  email: string = "";
  listadoPosts: Post[] = [];
  constructor(private router: Router, private post: Post) {
    addIcons({ logOutOutline });


  }

  ngOnInit() {
    const storedEmail = sessionStorage.getItem('userEmail');

    if (storedEmail) {
      this.email = storedEmail;
    }

    setTimeout(()=> {
      this.post.getPosts().subscribe(posts => {
        this.listadoPosts = posts;
      })
    }, 2000)
  }

  logout() {
    // Aquí puedes limpiar storage o tokens
    console.log('Cerrando sesión...');
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

  

}
