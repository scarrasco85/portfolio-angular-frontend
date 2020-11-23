import { Component, OnInit } from '@angular/core';
//Modelo del componente
import { Project } from '../../models/project';
//Servicio del componente
import { ProjectService } from '../../services/project.service';
//Servicio encargado de subir archivos
import { UploadService } from '../../services/upload.service';
//Archivo de configuracion global
import { Global } from '../../services/global';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
  //Cargamos servicio del componente
  providers: [ProjectService, UploadService]
})
export class CreateProjectComponent implements OnInit {

	public title: string;
	//Propiedad de tipo Project para el nuevo proyecto
	public project: Project;
	//Para controlar si todo ha ido bien
	public status: string;
	public year: Date;
	//Recoge los archivos a subir que se recibe del formulario
	public filesToUpload: Array<File>;
	//La usaremos para guardar el id del proyecto guardado y usarlo en la vista para crear el enlace que
	//lo muestra en detalle
	public saveProject: Project;
	
	constructor(
		//Creamos las propiedades del Servicio
		private _projectService: ProjectService,
		private _uploadService: UploadService
	){
		//Inicializamos las propiedades
		this.title = "Crear nuevo proyecto";
		this.year = new Date();
		//Creamos una instancia de objeto Project (modelo componente)
		this.project = new Project('','','','',this.year.getFullYear(),'','', null);
		this.status = "";
	 }

	ngOnInit() {
	}

	//método para recoger los datos del formulario del componente y llamar al método que guarda los datos
	//en la base de datos
	onSubmit(form){
		
		/*Llamamos al método creado en nuestro servicio, que realiza la petición POST, y además lo 
		suscribimos a un Observable para controlar la respuesta o error que devuelve */
		//Guardar datos básicos
		this._projectService.saveProject(this.project).subscribe(
			response => {
				console.log(response);
				//Si nos llega una respuesta satisfactoria
				if(response.project){
					/*Si los datos se han guardado correctamente, subimos las imágenes*/
					//Subir la imagen o imágenes seleccionadas
					/* 1º parámetro es la url del método de nuestro backend('/upload-image'),en response.project._id tenemos 
					   el id del proyecto creado. 2º parámetro lo dejamos vacío porque es opcional. 3º parámetro son los archivos
					   a subir. Y el último parámetro es el nombre del campo que va a recibir el backend(Lo tenemos en el archivo
					   backend/controller/project.js y el método uploadImage) y vemos que el nombre del campo es 'image'
					*/
					//Además sólo lo hacemos si filesToUpload tiene algo
					if(this.filesToUpload){	
						this._uploadService.makeFileRequest(Global.url+"/upload-image/"+response.project._id, [], this.filesToUpload, 'image')
						.then((result:any) => {
							//Guardamos proyecto guardado para crear el enlace en la vista con su id
							this.saveProject = result.project;
							this.status = 'success';
							form.reset();
							console.log("Resultado petición ajax subir imágenes proyecto", result);
						});
					//Si no hay archivos para subir en filesToUpload también guardamos el enlace
					}else{
						//Guardamos proyecto guardado para crear el enlace en la vista con su id
						this.saveProject = response.project;
						this.status = 'success';
						form.reset();
						console.log("Resultado petición ajax subir imágenes proyecto", response);
					}
				}
			},
			error => {
				console.log(<any>error);
				this.status = 'failed';
			}
		);
	}

	//método que recoge los archivos seleccionados en el input de subir imágenes y que invocamos desde else
	//formulario cada vez que salta el evento (change) del input.
	fileChangeEvent(fileInput: any) {
		//forzamos a que filesToUpload sea un Array de tipo File que es otro array, esto se llama Castear.
		//Y le asignamos los archivos que se han seleccionado en el input y que estamos recibiendo como parámetro
		//con fileInput. Para ver todo el objeto y lo que guarda podemo hacer un cosole.log(fileInput).
		this.filesToUpload = <Array<File>>fileInput.target.files;
	}

}
