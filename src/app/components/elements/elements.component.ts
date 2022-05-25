import { Component, OnInit } from '@angular/core';
import { Element } from 'src/app/Element';
import { ELEMENTS } from 'src/app/mock-elements';
import { ComponentService } from 'src/app/services/component.service';
import {Observable,of } from 'rxjs';


@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {
  elements:Element[] = []; 

  constructor(private componentService:ComponentService) { }

  ngOnInit(): void {
    //FIRES RIGHT AWAY
    this.componentService.getElements().subscribe((elements) => (this.elements = elements))

    //USE OBSERVEABLE
  }

}
