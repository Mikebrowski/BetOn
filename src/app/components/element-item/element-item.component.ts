import { Component, Input, OnInit } from '@angular/core';
import { Element } from 'src/app/Element';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-element-item',
  templateUrl: './element-item.component.html',
  styleUrls: ['./element-item.component.css']
})
export class ElementItemComponent implements OnInit {
  @Input()
  element!: Element;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
