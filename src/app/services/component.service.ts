import { Injectable } from '@angular/core';
import { ELEMENTS } from '../mock-elements'; // STORAGE OF DATA OR examples 
import { Element } from '../Element';  //INTERFACE
import { catchError, Observable,of, throwError } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type':'application/json'}
  ),
}


@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  private apiURL = 'http://localhost:5000/elements' //HERE YOU GRAB THE JSON ALL LOCALLY BUT SAY FIREBASE ADRESSE SHOULD WORK 

  constructor(private http:HttpClient) { }

  getElements():Observable<Element[]>
  {
    return this.http.get<Element[]>(this.apiURL)

    //const elements = of(ELEMENTS);
    //return ELEMENTS; //THIS IS NOT OBSERVERABLE
    //return elements
  }
  deleteElement(element:Element): Observable<Element> {
    const url = `${this.apiURL}/${element.id}`;
    console.log(element)
    return this.http.delete<Element>(url);
  }
  toggleActive(element:Element){
    element.active =! element.active;
    console.log(element.active)
  }
  updateElementActive(element:Element): Observable<Element> {
    const url = `${this.apiURL}/${element.id}`;
    return this.http.put<Element>(url, element,httpOptions)
  }
  addTask(element:Element):Observable<Element>{
    return this.http.post<Element>(this.apiURL, element, httpOptions);
  }

  /*
  updateTaskReminder(element: Element): Observable<Element> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
*/
}