import { Component, OnInit } from '@angular/core';
//Modelo del componente
import { Project } from '../../models/project';
//Servicio del componente
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
  //Cargamos servicio del componente
  providers: [ProjectService]
})
export class CreateProjectComponent implements OnInit {

	public title: string;
	//Propiedad de tipo Project para el nuevo proyecto
	public project: Project;
	//Para controlar si todo ha ido bien
	public status: string;
	//La usaremos para guardar el id del proyecto guardado y usarlo en la vista para crear el enlace que
	//lo muestra en detalle
	public id_project_saved: string;
	
	constructor(
		//Creamos las propiedades del Servicio
		private _projectService: ProjectService
	){
		//Inicializamos las propiedades
		this.title = "Crear nuevo proyecto";
		//Creamos una instancia de objeto Project (modelo componente)
		this.project = new Project('','','','',2019,'','');
		this.status = "";
		this.id_project_saved = "";
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
					this.status = 'success';
					//recogemos el project id para implementar un enlace en la vista que funcionará
					//cuando implemtemos el método para consultar un proyecto
					this.id_project_saved = response.project._id;
					console.log('project id='+response.project._id);
					form.reset();
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

}
