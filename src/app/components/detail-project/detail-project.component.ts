import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.css',
		      './detail-project.component.css'],
  providers: [ProjectService]
})
export class DetailProjectComponent implements OnInit {

	public url: string;
	public project: Project;
	public confirm: boolean;
  	
  	constructor(
  		private _projectService: ProjectService,
  		private _router: Router,
  		private _route: ActivatedRoute
  	){
  		this.url = Global.url;
		this.project = new Project("","","","", 0,"","",null);
		this.confirm = false;
  	 }

  	ngOnInit() {

		this._route.params.subscribe(params => {
			let id = params.id;

			this.getProject(id);
		});
  	}

	// Get project by id
	getProject(id) {
		
		this._projectService.getProject(id).subscribe(
			response => {
				
				this.project = response.project;
				
			},
			error => {
				console.log(<any>error);
			}
		);
	}

	// Delete project by Id
	deleteProject(id) {

		this._projectService.deleteProject(id).subscribe(
			response => {
				
				if(response.project){
					this._router.navigate(['/proyectos']);
				}
			},
			error => {
				console.log("Error al eliminar el proyecto: ", <any>error);	
			}
		);
	}

	// Controls the deletion confirmation the project
	setConfirm(confirm){
		this.confirm = confirm;
	}

}
