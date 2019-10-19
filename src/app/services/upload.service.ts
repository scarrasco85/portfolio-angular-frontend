import { Injectable } from '@angular/core';
import { Global } from './global';

@Injectable()
export class UploadService {
	public url: string;

	constructor(){
		this.url = Global.url;
	}

	//Método que realiza una petición AJAX clásica en la que adjuntamos un archivo para subir
	makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string){
		//si nos devuelve resolve es que la promesa se ha resuelto y si llega reject es que ha devuelto un
		//error
		return new Promise(function(resolve, reject){
			//para la petición necesitamos simular un formulario clásico
			//FormData() nos permite crear un objeto de tipo formulario, en este caso detallamos que será
			//de tipo any para no tener ningún problema
			let formData:any = new FormData();
			//Creamos variable xhr, qué es sinónimo de ajax, que contendrá un objeto de tipo XMLHttpRequest
			//qué es el tipo de objeto de peticiones asíncronas que siempre ha habido en javascript 
			let xhr = new XMLHttpRequest();

			//Bucle que recorre el array de archivos<File> que puede estar llegando
			/* Es decir: Recorre todos los archivos que me llegan, y adjuntalo al formulario con el nombre que
			   se recibe cómo parámetro "name", se añade el archivo(ruta) "files[i]" y recoge su nombre también
			   files[i].name
			*/
			for(let i = 0; i < files.length; i++){
				//A formData se le añade el name del campo del formulario, el archivo que se añaderá en la
				//petición, y el nombre del archivo. Así podremos hacer una petición para subir vario archivos
				formData.append(name, files[i], files[i].name);

			}

			//Definimos al objeto XMLHttpRequest la función que se encarga de procesar la respuesta de la
			//petición
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					if(xhr.status == 200){
						resolve(JSON.parse(xhr.response));
					}else{
						reject(xhr.response);
					}

				}
			}

			//Se realiza la petición Ajax por POST enviandole el formulario
			//mediante post, a la url indicada, El tercer parámetro establece si la petición es asíncrona. Si se 
			//define TRUE, la ejecución de la función de JavaScript continuará aún cuando la respuesta del servidor 
			//no haya llegado. Por esta capacidad es la A en AJAX.
			xhr.open('POST', url, true);
			xhr.send(formData);

		});
	}
}