import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css',
			  './about.component.responsive.css']
})
export class AboutComponent implements OnInit {

	public title: string;
	public subtitle: string;
	public email: string;
  	
  	constructor() { 
		this.title = "Sergio Carrasco";
	  	this.subtitle = "Full Stack Developer";
	  	this.email = "chechucarrasco@gmail.com";
  	}

  	ngOnInit() {
  	}

}
