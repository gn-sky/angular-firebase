import { Component } from '@angular/core';
import { Task } from '../task/task';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SwimLanesService } from '../../data-access-swim-lanes/swim-lanes.service';
import { TaskDialogResult } from '../task-dialog/task-dialog';

@Component({
  selector: 'app-swim-lanes',
  templateUrl: './swim-lanes.component.html',
  styleUrls: ['./swim-lanes.component.css']
})
export class SwimLanesComponent {
  todo$: Observable<Task[]>;
  inProgress$: Observable<Task[]>;
  done$: Observable<Task[]>;

  constructor(
    private dialog: MatDialog,
    private swimLanesService: SwimLanesService,
  ) {
    this.todo$ = this.swimLanesService.getCollection('todo');
    this.inProgress$ = this.swimLanesService.getCollection('inProgress');
    this.done$ = this.swimLanesService.getCollection('done');
  }

  editTask = (collection: 'todo' | 'inProgress' | 'done', task: Task) => {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task,
        enableDelete: true,
      },
    });
    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((result: TaskDialogResult | undefined) => {
        if (!result) {
          return;
        }
        if (result.delete) {
          this.swimLanesService.deleteDocument(collection, task.id as string);
        } else {
          this.swimLanesService.updateDocument(collection, task);
        }
      });
  };

  drop = (event: CdkDragDrop<Task[]>) => {
    if (event.previousContainer === event.container) {
      return;
    }

    const item = event.previousContainer.data[event.previousIndex];
    this.swimLanesService.transact(event.previousContainer.id, event.container.id, item);

    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  };

  newTask = () => {
    const newTaskStartsWith = 'todo';
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
        this.swimLanesService.addDocument(newTaskStartsWith, result.task);
      });
  };
}
