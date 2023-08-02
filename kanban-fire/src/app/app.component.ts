import { Component, inject } from '@angular/core';
import { Task } from './task/task';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import {
  TaskDialogComponent,
  TaskDialogResult,
} from './task-dialog/task-dialog.component';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'kanban-fire';

  todo$: Observable<Task[]>;
  inProgress: Task[] = [];
  done: Task[] = [];
  firestore: Firestore = inject(Firestore);

  constructor(private dialog: MatDialog) {
    const todoCollection = collection(this.firestore, 'todo');
    const options = { idField: 'id' };
    this.todo$ = collectionData(todoCollection, options) as Observable<Task[]>;
  }

  editTask = (list: 'done' | 'todo' | 'inProgress', task: Task) => {
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
        // const dataList = this[list];
        // const taskIndex = dataList.indexOf(task);
        if (result.delete) {
          // dataList.splice(taskIndex, 1);
          deleteDoc(doc(this.firestore, 'todo', <string>task.id));
        } else {
          // dataList[taskIndex] = task;
          // const todoDocRef = doc(this.firestore, 'todo', '0');
          // updateDoc(todoDocRef, task);
        }
      });
  };

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
        addDoc(collection(this.firestore, 'todo'), result.task);
      });
  };
}
