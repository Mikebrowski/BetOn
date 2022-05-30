import { Component, Input, OnInit, Output } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  showAddTask:boolean = true;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle()
    .subscribe(
      value => this.showAddTask = value
      )
  }

  ngOnInit(): void {
  }
  toggleAddElement(){
    this.uiService.toggleAddTask();
  }
  toggleRemoveElement(){
    let x = 'remove som';
    console.log(x);
  }
  
}
