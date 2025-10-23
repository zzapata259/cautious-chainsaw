import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';


/**
 * 🧑‍💻 Interfaz para representar un usuario
 */
export interface Usuario {
  id: number;
  correo: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseUsuario {

  private db: SQLiteObject | null = null;

  constructor(private sqlite: SQLite, private platform: Platform) {}

  /**
   * 🧱 Crea la base de datos y la tabla "usuarios"
   */
  async crearBDUsuario() {
    try {
      await this.platform.ready();

      this.db = await this.sqlite.create({
        name: 'usuarios.db',
        location: 'default'
      });

      console.log("📦 Base de datos 'usuarios.db' creada");

      await this.db.executeSql(
        `CREATE TABLE IF NOT EXISTS usuarios (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          correo TEXT UNIQUE,
          password TEXT
        )`, []
      );

      console.log("✅ Tabla 'usuarios' creada o ya existente");
    } catch (e) {
      console.error("❌ Error al crear la base de datos de usuarios", e);
    }
  }

  /**
   * ➕ Inserta un nuevo usuario
   */
  async insertarUsuario(usuario: Usuario) {
    try {
      if (!this.db) {
        console.warn('⚠️ La base de datos de usuarios no está inicializada.');
        return;
      }

      const { correo, password } = usuario;

      await this.db.executeSql(
        `INSERT INTO usuarios (correo, password) VALUES (?, ?)`,
        [correo, password]
      );

      console.log(`✅ Usuario con correo "${correo}" insertado correctamente`);
    } catch (e) {
      console.error('❌ Error al insertar usuario', e);
    }
  }

  /**
   * 🔍 Verifica si un usuario existe con correo y contraseña
   */
  async verificarUsuario(correo: string, password: string): Promise<boolean> {
    try {
      if (!this.db) {
        console.warn('⚠️ La base de datos de usuarios no está inicializada.');
        return false;
      }

      const result = await this.db.executeSql(
        `SELECT * FROM usuarios WHERE correo = ? AND password = ?`,
        [correo, password]
      );

      return result.rows.length > 0;
    } catch (e) {
      console.error('❌ Error al verificar usuario', e);
      return false;
    }
  }

  /**
   * 📋 Obtiene todos los usuarios (solo para depuración)
   */
  async obtenerUsuarios(): Promise<Usuario[]> {
    try {
      if (!this.db) {
        console.warn('⚠️ La base de datos no está inicializada.');
        return [];
      }

      const result = await this.db.executeSql('SELECT * FROM usuarios', []);
      const usuarios: Usuario[] = [];

      for (let i = 0; i < result.rows.length; i++) {
        usuarios.push(result.rows.item(i));
      }

      console.log(`📋 Se obtuvieron ${usuarios.length} usuarios`);
      return usuarios;
    } catch (e) {
      console.error('❌ Error al obtener usuarios', e);
      return [];
    }
  }

  /**
   * 🗑️ Elimina un usuario por su ID
   */
  async eliminarUsuario(id: number) {
    try {
      if (!this.db) {
        console.warn('⚠️ La base de datos no está inicializada.');
        return;
      }

      await this.db.executeSql('DELETE FROM usuarios WHERE id = ?', [id]);
      console.log(`🗑️ Usuario con id ${id} eliminado`);
    } catch (e) {
      console.error('❌ Error al eliminar usuario', e);
    }
  }
}
