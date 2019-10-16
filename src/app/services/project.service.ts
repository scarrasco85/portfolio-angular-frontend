/** Servicio de la entidad Project **/

//Importamos módulos necesarios
import { Injectable } from '@angular/core';
//Para poder hacer peticiones Ajax
import { HttpClient, HttpHeaders } from '@angular/common/http';
/* Nota: Si nos aparece un error al incluir el módulo Observable es posible que tengas que instalar la 
librería(rxjs) que incluye el módulo: Para instalar dicha dependencia en el proyecto podemos ejecutar 
el siguiente comando: 
	-npm install --save rxjs-compat
*/
import { Observable } from 'rxjs/Observable';
//Modelo de la entidad Project
import { Project } from '../models/project';
//Fichero de configuración global que hemos creado
import { Global } from './global';


@Injectable()
export class ProjectService {
	public url: string;

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}

	//Método de prueba
	testService(){
		return 'Probando el servicio de la entidad Project';
	}
}