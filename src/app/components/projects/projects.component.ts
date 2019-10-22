import { Component, OnInit } from '@angular/core';
//Modelo del componente
import { Project } from '../../models/project';
//Servicio del componente
import { ProjectService } from '../../services/project.service';
//Archivo de configuracion global
import { Global } from '../../services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {

	//propiedad donde capturaremos los datos de los proyectos para mostrarlos en la vista del componente
	public projects: Project[];
	public url: string;

	constructor(
			private _projectService: ProjectService
	){
		this.url = Global.url;
			
	 }

	ngOnInit() {
		//Llámamos al método que lista los proyectos al cargar el componente
		this.getProjects();
	}

	//Método que llama al método con el mismo nombre del servicio del componente project.service,
	//encargado de devolver todos los proyectos que hay en la colección 'projects' de la base de datos
	getProjects(){
		this._projectService.getProjects().subscribe(
			response => {
				console.log(response);
				//Si la petición ha ido bien, recogemos  la información de los proyectos en this.projects
				if(response.projects){
					this.projects = response.projects;
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}

}