import { Component, OnInit } from '@angular/core';
import { Element } from 'src/app/Element';
import { ELEMENTS } from 'src/app/mock-elements';


@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {
  elements:Element[] = ELEMENTS; 

  constructor() { }

  ngOnInit(): void {
  }

}
