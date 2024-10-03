import { Component } from '@angular/core';
import { Task } from './interface/interfaces';
import { Mocks } from './mock/mocks';
import { TaskService } from './service/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Gestión de tareas';
  public taskList: Task[] = [];

  constructor(
    private taskService: TaskService,
  ) { 
    taskService.getTasks().subscribe(task => {
      this.taskList = task
    });
  }
}
