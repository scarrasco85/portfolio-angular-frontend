import { Component, OnInit } from '@angular/core';
import { Global } from '../../services/global';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css',
              './contact.component.responsive.css']
})
export class ContactComponent implements OnInit {

  public url: string;

  constructor() { 
    this.url = Global.url;
  }

  ngOnInit() {
  }

}
