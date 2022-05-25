import { Injectable } from '@angular/core';
import { ELEMENTS } from '../mock-elements'; // STORAGE OF DATA OR examples 
import { Element } from '../Element';  //INTERFACE
import { Observable,of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  private apiURL = 'http://localhost:5000/elements' //HERE YOU GRAB THE JSON ALL LOCALLY BUT SAY FIREBASE ADRESSE SHOULD WORK 

  constructor() { }

  getElements():Observable<Element[]>
  {
    const elements = of(ELEMENTS);
    //return ELEMENTS; //THIS IS NOT OBSERVERABLE
    return elements
  }
}
