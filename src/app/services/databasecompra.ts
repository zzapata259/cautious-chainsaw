import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

export interface Compra {
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseCompra {

  private db: SQLiteObject | null = null;

  constructor(private sqlite: SQLite, private platform: Platform) {}

  /**
   * 🧱 Crea la base de datos y la tabla "compras"
   */
  async crearBD() {
    try {
      await this.platform.ready();

      this.db = await this.sqlite.create({
        name: 'compras.db',
        location: 'default'
      });

      console.log("📦 Base de datos 'compras.db' creada");

      await this.db.executeSql(
        `CREATE TABLE IF NOT EXISTS compras (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre TEXT,
          descripcion TEXT,
          precio REAL,
          imagen TEXT
        )`, []
      );

      console.log("✅ Tabla 'compras' creada o ya existente");
    } catch (e) {
      console.error("❌ Error al crear la base de datos", e);
    }
  }

  /**
   * ➕ Inserta una compra en la tabla
   */
  async insertarCompra(compra: Compra) {
    try {
      if (!this.db) {
        console.warn('⚠️ La base de datos no está inicializada.');
        return;
      }

      const { nombre, descripcion, precio, imagen } = compra;

      await this.db.executeSql(
        `INSERT INTO compras (nombre, descripcion, precio, imagen)
         VALUES (?, ?, ?, ?)`,
        [nombre, descripcion, precio, imagen]
      );

      console.log(`✅ Compra "${nombre}" insertada correctamente`);
    } catch (e) {
      console.error('❌ Error al insertar compra', e);
    }
  }

  /**
   * 📋 Obtiene todas las compras almacenadas
   */
  async obtenerCompras(): Promise<Compra[]> {
    try {
      if (!this.db) {
        console.warn('⚠️ La base de datos no está inicializada.');
        return [];
      }

      const result = await this.db.executeSql('SELECT * FROM compras', []);
      const compras: Compra[] = [];

      for (let i = 0; i < result.rows.length; i++) {
        compras.push(result.rows.item(i));
      }

      console.log(`📋 Se obtuvieron ${compras.length} compras`);
      return compras;
    } catch (e) {
      console.error('❌ Error al obtener compras', e);
      return [];
    }
  }

  /**
   * 🗑️ Elimina una compra por su ID
   */
  async eliminarCompra(id: number) {
    try {
      if (!this.db) {
        console.warn('⚠️ La base de datos no está inicializada.');
        return;
      }

      await this.db.executeSql('DELETE FROM compras WHERE id = ?', [id]);
      console.log(`🗑️ Compra con id ${id} eliminada`);
    } catch (e) {
      console.error('❌ Error al eliminar compra', e);
    }
  }

  /**
   * 📦 Obtiene todas las compras ordenadas por ID
   */
  async obtenerTodasCompras(): Promise<Compra[]> {
    try {
      if (!this.db) {
        console.log("⚠️ La base de datos no está lista, intentando crearla...");
        await this.crearBD(); // intenta crear la BD si no existe
      }

      const result = await this.db!.executeSql('SELECT * FROM compras ORDER BY id ASC', []);
      const listaCompras: Compra[] = [];

      for (let i = 0; i < result.rows.length; i++) {
        listaCompras.push(result.rows.item(i));
      }

      console.log(`🛒 Se recuperaron ${listaCompras.length} compras desde la base de datos`);
      return listaCompras;

    } catch (error) {
      console.error("❌ Error al obtener todas las compras:", error);
      return [];
    }
  }
}

