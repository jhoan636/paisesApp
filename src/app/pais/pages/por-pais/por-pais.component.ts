import { Component } from '@angular/core';
import { PaisService } from './../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  //  variables

  /**
   * Este valor esta conectado con el HTML mediante una conexión bidireccional mediante en [(Ngmodel)]
   * @type {string}
   */
  termino: string = '';

   /**
   * Se usa para validar si se genero un error o no y enviar una repuesta al HTML y mostrar o esconder un div
   * @type {boolean}
   */
  hayError:boolean = false;

   /**
   * Vamor a enviar los valores de cada pais
   * @type {Country[]}
   */
  paises : Country[] = [];

  tabla:boolean = true;



  // constructor

  /**
   * @constructor
   * @param {PaisService} paisService : inyectamos el servicio creado para los paises
   */
  constructor( private paisService:PaisService){}

  // Funciones

  /**
   * Se encarga de enviarle el valor de buscarPais(this.termino) el cual es una función inyectada que nos permite consumir la busqueda
   * @returns {}
   */
  buscar() {
    this.hayError = false
    console.log(this.termino);

    // Aca se hace un cambio ya que en la version 6.4 de Rxjs debemos de asignar de una nueva manera
    // como nos subcribimos a un avento cuando hay mas de dos funciones
    // Documentación https://rxjs.dev/deprecations/subscribe-arguments
   this.paisService.buscarPais(this.termino)
   .subscribe({
    next: (data) =>{
      console.log('Data:',data);
      this.paises = data;
      this.tabla = false;
    },
    error: (_) =>
    {
      this.hayError = true;
      this.paises = [];
    },
  });


  }



}
