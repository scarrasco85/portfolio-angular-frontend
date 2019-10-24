import { Component, OnInit } from '@angular/core';
//Modelo del componente
import { Project } from '../../models/project';
//Servicio del componente
import { ProjectService } from '../../services/project.service';
//Servicio encargado de subir archivos
import { UploadService } from '../../services/upload.service';
//Archivo de configuracion global
import { Global } from '../../services/global';
//Módulos necesarios para poder acceder a los parámetros recibidos por URL
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
   //Cargamos servicio que creamos para trabajar con los proyectos
  providers: [ProjectService, UploadService]
})
export class EditProjectComponent implements OnInit {

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
	//para cargar la imagen del proyecto
	public url: string;

  	constructor(
  		//Creamos las propiedades de los Servicios necesarios
		private _projectService: ProjectService,
		private _uploadService: UploadService,
		//Servicio de rutas
		private _route: ActivatedRoute
  	){
  		this.title = "Editar proyecto";
		this.url = Global.url;
  	 }

  	ngOnInit() {
  		//Al cargar el componente recogemos el parámetro que nos llega por la URL y llamamos al método 
		//del componente getProject() creado abajo pasándole el parámetro recogido para cargar la información
		//del proyecto a editar
		this._route.params.subscribe(params => {
			//recogemos el id que nos llega por la url
			let id = params.id;

			//llámamos al método del componente pasandole ya el parámetro recogido
			this.getProject(id);
		});
  	}

  	//Método que llama al método del servicio del componente que realiza la petición al backend para 
	//obtener la información de un proyecto especifico
	getProject(id) {
		//Ahora invocamos al método de nuestro servicio para obtener la información del proyecto con
		//el id recibido por parámetro
		this._projectService.getProject(id).subscribe(
			response => {
				//Si todo ha ido bien recogemos el objeto con la información del proyecto para poder
				//mostrarla en la vista del componente
				this.project = response.project;
				//console.log("Proyecto devuelto: ",response.project);
			},
			error => {
				console.log(<any>error);
			}
		);
	}

	//En el evento onSubmit llamamos al método de nuestro servicio updateProject pasandole los datos
	//del formulario para actualizar el proyecto
	onSubmit() {
		this._projectService.updateProject(this.project).subscribe(
			response => {
				//Si nos llega una respuesta satisfactoria
				if(response.project){
				/*Si los datos se han actualizado correctamente, subimos las imágenes*/
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
							//Guardamos el id del proyecto guardado para crear el enlace en la vista
							this.saveProject = result.project._id;
							this.status = 'success';
						});
						//Si no hay archivos para subir en filesToUpload también guardamos el enlace
					}else{
						//Guardamos el id del proyecto guardado para crear el enlace en la vista
						this.saveProject = response.project._id;
						this.status = 'success';
					}

				}else{
					this.status = 'failed';
				}
			},
			error => {
				console.log(<any>error);
				this.status = 'failed';
			}
		);
	}

	//Además necesitamos el fileChangeEvent igual que en el create-projects
	//método que recoge los archivos seleccionados en el input de subir imágenes y que invocamos desde el
	//formulario cada vez que salta el evento (change) del input.
	fileChangeEvent(fileInput: any) {
		//Casteamos el fileInput a que sea un array de tipo File. fileInput es el objeto que se recibe
		//cómo parámetro con los archivos seleccionados en el input file. console.log(fileInput) para más información
		//sobre el objeto recibido
		this.filesToUpload = <Array<File>>fileInput.target.files;
	}

}
