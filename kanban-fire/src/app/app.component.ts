import { Component } from '@angular/core';
import { Task } from './task/task';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanban-fire';

  todo: Task[] = [
    {
      title: "Start",
      description: "generate Angular app"
    },
    {
      title: "Add Angular material",
      description: "ng add @angular/material"
    }
  ];
  inProgress: Task[] = [];
  done: Task[] = [];

  editTask = (todo: string, event: Task) => { }

  drop = (event: CdkDragDrop<Task[]>) => {
    if (event.previousContainer === event.container) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    )
  };
}
