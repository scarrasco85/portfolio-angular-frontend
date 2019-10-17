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
	
	constructor(
		//Creamos las propiedades del Servicio
		private _projectService: ProjectService
	){
		//Inicializamos las propiedades
		this.title = "Crear nuevo proyecto";
		//Creamos una instancia de objeto Project (modelo componente)
		this.project = new Project('','','','',2019,'','');
	 }

	ngOnInit() {
	}

	onSubmit(form){
		console.log(this.project);
	}

}
