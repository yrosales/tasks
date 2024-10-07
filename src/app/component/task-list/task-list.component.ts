import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/interface/interfaces';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  @Input() taskList?: Task[];

  public title: string = 'Lista de Tareas';

  cancelTask(){
    
  }

}
