import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Input()text1!: string;
  @Input()text2!: string;
  @Input()color!: string;
  @Output() btnClick = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {}

  onClick(){this.btnClick.emit()}


}
