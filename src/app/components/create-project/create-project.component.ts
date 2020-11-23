import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateProjectComponent implements OnInit {

	public title: string;
	public project: Project;
	// Property used to check if everything went well
	public status: string;
	public year: Date;
	public filesToUpload: Array<File>;
	// Property used to save the id of the uploaded project and display it in the view with a link
	public saveProject: Project;
	
	constructor(
		private _projectService: ProjectService,
		private _uploadService: UploadService
	){
		this.title = "Crear nuevo proyecto";
		this.year = new Date();
		this.project = new Project('','','','',this.year.getFullYear(),'','', null);
		this.status = "";
	 }

	ngOnInit() {
	}

	// Collects the form data and calls the method that saves a project in the database
	onSubmit(form){
		
		this._projectService.saveProject(this.project).subscribe(
			response => {
				console.log(response);
				
				if(response.project){
					
					// Images are uploaded if provided
					if(this.filesToUpload){	
						this._uploadService.makeFileRequest(Global.url+"/upload-image/"+response.project._id, [], this.filesToUpload, 'image')
						.then((result:any) => {
							// The created project is saved to create the link in the view with it id
							this.saveProject = result.project;
							this.status = 'success';
							form.reset();
							console.log("Resultado petición ajax subir imágenes proyecto", result);
						});
					
					}else{
						// The created project is saved to create the link in the view with it id
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

	// The selected files are collected in 'filesToUpload' each time it changes the event 'change' of the 
	// input file is triggered
	fileChangeEvent(fileInput: any) {
		
		this.filesToUpload = <Array<File>>fileInput.target.files;
	}

}
