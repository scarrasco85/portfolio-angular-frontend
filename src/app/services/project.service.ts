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

	//Guarda un nuevo proyecto en la colección projects de la base de datos 'portafolio'
	//Declaramos que devuelve un Observable de cualquier tipo
	saveProject(project: Project): Observable<any>{
		//convertimos los datos recibidos en un objeto JSON para tratarlos con la Api
		let params = JSON.stringify(project);
		//Establecemos las cabezeras(cómo se va a enviar la información, es decir, en qué formato)
		//Así, establecemos que el Content-Type es de tipo 'application/json'
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		//hacemos la petición POST
		return this._http.post(this.url+'/save-project', params, {headers: headers});
	}

	//Método que obtiene todos los proyectos de la base de datos usando el método para ello de nuestra Api
	//de la aplicación(backend)
	getProjects(): Observable<any> {
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.get(this.url+'get-projects', {headers: headers});
	}

	//Método que devuelve un objeto con toda la información de un proyecto en concreto. Para ello usa el método
	//get '/project/:id?' del backend de la aplicación
	getProject(idProject): Observable<any> {
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'/project/'+idProject, {headers: headers});
	}

	//Método que envía una petición Ajax delete Http con el id del proyecto a borrar
	deleteProject(idProject): Observable<any> {
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		//.delete es el método Http que nos permite borrar
		return this._http.delete(this.url+'delete-project/'+idProject, {headers: headers}); 
	}
}