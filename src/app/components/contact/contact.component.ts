import { Component, OnInit } from '@angular/core';
//Archivo de configuracion global
import { Global } from '../../services/global';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public url: string;

  constructor() { 
    this.url = Global.url;
  }

  ngOnInit() {
  }

}
