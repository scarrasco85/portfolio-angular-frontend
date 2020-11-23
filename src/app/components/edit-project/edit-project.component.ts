import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditProjectComponent implements OnInit {

	public title: string;
	public project: Project;
	// Property to control if everything has gone correctly
	public status: string;
	public year: Date;
	public filesToUpload: Array<File>;
	public saveProject: Project;
	public url: string;

  	constructor(
		private _projectService: ProjectService,
		private _uploadService: UploadService,
		private _route: ActivatedRoute
  	){
  		this.title = "Editar proyecto";
		this.url = Global.url;
  	 }

  	ngOnInit() {
  	
		this._route.params.subscribe(params => {
			
			let id = params.id;

			this.getProject(id);
		});
  	}

  	// Get project by ID
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

	// Update project
	onSubmit() {
		this._projectService.updateProject(this.project).subscribe(
			response => {
				
				if(response.project){
				
					if(this.filesToUpload){	
						this._uploadService.makeFileRequest(Global.url+"/upload-image/"+response.project._id, [], this.filesToUpload, 'image')
						.then((result:any) => {
							
							this.saveProject = result.project._id;
							this.status = 'success';
						});
						
					}else{
						
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

	// Collect selected files
	fileChangeEvent(fileInput: any) {
		
		this.filesToUpload = <Array<File>>fileInput.target.files;
	}

}
