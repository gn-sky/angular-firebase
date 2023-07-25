import { Component } from '@angular/core';
import { Task } from './task/task';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import {
  TaskDialogComponent,
  TaskDialogResult,
} from './task-dialog/task-dialog.component';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'kanban-fire';

  todo: Task[] = [
    {
      title: 'Start',
      description: 'generate Angular app',
    },
    {
      title: 'Add Angular material',
      description: 'ng add @angular/material',
    },
  ];
  inProgress: Task[] = [];
  done: Task[] = [];

  constructor(private dialog: MatDialog) {}

  editTask = (todo: string, event: Task) => {};

  drop = (event: CdkDragDrop<Task[]>) => {
    if (event.previousContainer === event.container) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  };

  newTask = () => {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task: {},
      },
    });
    
    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((result: TaskDialogResult | undefined) => {
        if (!result) {
          return;
        }
        this.todo.push(result.task);
      });
  };
}
