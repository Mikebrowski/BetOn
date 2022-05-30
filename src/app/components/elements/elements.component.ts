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
    this.componentService.getElements().subscribe((elements) => 
    (this.elements = elements))

    //USE OBSERVEABLE
  }

  deleteElement(element: Element) {    
    this.componentService.deleteElement(element).subscribe(
      () => (this.elements = this.elements.filter((element) => element.id !== element.id)));
  }
  deleteElement2 (element:Element){
    this.componentService.deleteElement(element).subscribe(() => this.elements =this.elements.filter((e) => e.id !== e.id ))
    // FOR EACH ELEMENT THAT IS DELETATE IS NOT EQUAL TO eachElement => eachElement.id ! === element.id )))

  }
  toggleActive(element:Element){
    element.active =! element.active;
    console.log(element.active)
    this.componentService.updateElementActive(element).subscribe()
  }
  addTask(element:Element){
    this.componentService.addTask(element).subscribe((element) => this.elements.push
     
      )
    console.log(element)
  }
  

  
}
