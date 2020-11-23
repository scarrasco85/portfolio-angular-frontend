/** Project Service **/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Project } from '../models/project';
import { Global } from './global';


@Injectable()
export class ProjectService {
	public url: string;

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}

	// Save project in bbdd
	saveProject(project: Project): Observable<any>{
		
		let params = JSON.stringify(project);
		
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
	
		return this._http.post(this.url+'/save-project', params, {headers: headers});
	}

	// Get all projects
	getProjects(): Observable<any> {
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.get(this.url+'get-projects', {headers: headers});
	}

	// Get project by ID
	getProject(idProject): Observable<any> {
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'/project/'+idProject, {headers: headers});
	}

	// Delete project by ID
	deleteProject(idProject): Observable<any> {
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		
		return this._http.delete(this.url+'delete-project/'+idProject, {headers: headers}); 
	}

	// Update project by ID
	updateProject(project): Observable<any> {
		
		let params = JSON.stringify(project);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
	
		return this._http.put(this.url+'/update-project/'+project._id, params, {headers: headers});
	}
}