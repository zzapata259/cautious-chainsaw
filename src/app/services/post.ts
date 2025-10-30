import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface SaludoGif {
  mensaje: string;
  gif: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {  // ✅ cambio de nombre aquí

  private urlApi = "https://jsonplaceholder.typicode.com/posts";
  private urlSaludo = "https://demo8984564.mockable.io/saludoGif"; // ✅ usa HTTPS

  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.urlApi);
  }

  getSaludoGif(): Observable<SaludoGif> {
    return this.httpClient.get<SaludoGif>(this.urlSaludo);
  }
}
