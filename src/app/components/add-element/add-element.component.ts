import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Element } from 'src/app/Element';

@Component({
  selector: 'app-add-element',
  templateUrl: './add-element.component.html',
  styleUrls: ['./add-element.component.css']
})
export class AddElementComponent implements OnInit {
  @Output() onAddTask:EventEmitter<Element> = new EventEmitter();
  info!: string;
  day!: string;
  active: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    if (!this.info) {
      alert('Please add a task!');
      return;
    }


    const newTask = {
      info: this.info,
      day: this.day,
      active: this.active,
    };

    //this.onAddTask.emit(newTask);
    this.onAddTask.emit(newTask)

    this.info ='';
    this.day ='';
    this.active =false;
  }
}
