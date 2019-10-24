import { Component, OnInit } from '@angular/core';
//Modelo del componente
import { Project } from '../../models/project';
//Servicio del componente
import { ProjectService } from '../../services/project.service';
//Archivo de configuracion global
import { Global } from '../../services/global';
//Módulos necesarios para poder acceder a los parámetros recibidos por URL
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.css'],
  providers: [ProjectService]
})
export class DetailProjectComponent implements OnInit {

	//propiedad para recoger la url de la api definida en Global
	public url: string;
	//Propiedad para recoger la información del proyecto obtenido para mostrarlo en la vista
	public project: Project;
	//Propiedad para pedir la confirmación en caso de querer borrar el proyecto
	public confirm: boolean;
  	
  	constructor(
  		//Cargamos servicios necesarios en el constructor
  		private _projectService: ProjectService,
  		private _router: Router,
  		private _route: ActivatedRoute
  	){
  		this.url = Global.url;
		this.project = new Project("","","","", 0,"","");
		this.confirm = false;
  	 }

  	ngOnInit() {

  		//Al cargar el componente recogemos el parámetro que nos llega por la URL y llamamos al método 
		//del componente getProject pasándole el parámetro recogido
		this._route.params.subscribe(params => {
			let id = params.id;

			//llámamos al método del componente pasandole ya el parámetro recogido
			this.getProject(id);
		});
  	}

  	//Método que llama al método del servicio del componente que realiza la petición al backend para 
	//obtener la información de un proyecto especifico
	/* Éste método recibe un parámetro (id del proyecto) que nos llega por la url y que recogemos en
	   el ngOnInit() 
	*/
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

	/* Método para borrar un proyecto, llama al método deleteProject del servicio del componente (project.service.ts) */
	deleteProject(id) {

		this._projectService.deleteProject(id).subscribe(
			response => {
				//si todo ha ido bien hacemos una redirección a la página de proyectos
				if(response.project){
					this._router.navigate(['/proyectos']);
				}
			},
			error => {
				console.log("Error al eliminar el proyecto: ", <any>error);	
			}
		);
	}

	//Método que controla la confirmación de borrado del proyecto
	setConfirm(confirm){
		this.confirm = confirm;
	}

}
