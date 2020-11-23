import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  public pdfSrc: string;

  constructor() {

      this.pdfSrc = "/assets/Sergio_Carrasco_CV.pdf";
  }

  ngOnInit() {
  }

}
