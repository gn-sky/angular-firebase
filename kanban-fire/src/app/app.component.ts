import { Component } from '@angular/core';
import { Task } from './task/task';

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
  ]  
}
