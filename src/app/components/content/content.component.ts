import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonsComponent } from '../buttons/buttons.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }
  toggleAddElement(){
    let s = 'something';
    console.log(s);
    
  }
  
}
