import { Injectable } from '@angular/core';
import { Mocks } from '../mock/mocks';
import { Task } from '../interface/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks = new BehaviorSubject<Task[]>(Mocks.tasks);

  constructor() { }

  getTasks(): Observable<Task[]> {
    return this.tasks.asObservable();
  }

  saveTask(body:Task){
    throw new Error('Function not implemented.');
  }

  finishTask(body:Task){
    throw new Error('Function not implemented.');
  }

}

