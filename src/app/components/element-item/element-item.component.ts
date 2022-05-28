import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Element } from 'src/app/Element';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-element-item',
  templateUrl: './element-item.component.html',
  styleUrls: ['./element-item.component.css']
})
export class ElementItemComponent implements OnInit {
  @Input() element!: Element;
  @Output() onDeleteElement: EventEmitter<Element> = new EventEmitter()
  faTimes = faTimes;
  @Output() onToggleActive: EventEmitter<Element> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  /*
  onDelete(element: any){
    console.log(element);
  }
  */
  onDelete(element: any){
    this.onDeleteElement.emit(element);
    console.log(element)
  }
  onToggle(element:any){
    this.onToggleActive.emit(element);

  }

}
