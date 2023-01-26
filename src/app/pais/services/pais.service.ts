import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  // Variables

  /**
   * Se encarga de almacenar el URL base de una Api
   * @type {string}
   * @private
   */
  private apiUrl: string = 'https://restcountries.com/v3.1';

  // constructor

  /**
   * @constructor
   * @param {HttpClient} http : Se inyecta la dependencia HttpClient
   */
  constructor(private http: HttpClient) { }

  // Funciones

  /**
   * Buscar en la api el pais por medio la variable termino
   * @param {string} termino  Corresponde el valor o caracteres de la consulta
   * @returns {Observable<any>} devuelve los resultados de la busqueda en forma de un observable Nota: Debo subscribirme al observable para poderlo usar
   */
  buscarPais(termino: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }
}
