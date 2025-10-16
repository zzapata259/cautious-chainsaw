import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx'

@Injectable({
  providedIn: 'root'
})
export class Database {

  private db: SQLiteObject | null = null;

  constructor(private sqlite: SQLite, private platform: Platform) {}

  async crearBD() {
    try {
      await this.platform.ready();

      this.db = await this.sqlite.create({
        name: 'usuarios.db',
        location: 'default'
      });

      console.log("Base de datos creada");
  
      await this.db.executeSql(

        'CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, email TEXT, password TEXT)', []
      );

      console.log("Tabla creada");
    } catch (e) {
      console.log("Ocurrio un error al crear la base de datos", e)
    }
  }
  
}
