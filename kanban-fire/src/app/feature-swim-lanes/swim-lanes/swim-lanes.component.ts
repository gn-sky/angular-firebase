import { Component, inject } from '@angular/core';
import { Task } from '../task/task';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import {
  TaskDialogComponent,
  TaskDialogResult,
} from '../task-dialog/task-dialog.component';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { runTransaction } from '@firebase/firestore';

@Component({
  selector: 'app-swim-lanes',
  templateUrl: './swim-lanes.component.html',
  styleUrls: ['./swim-lanes.component.css']
})
export class SwimLanesComponent {
  todo$: Observable<Task[]>;
  inProgress$: Observable<Task[]>;
  done$: Observable<Task[]>;
  firestore: Firestore = inject(Firestore);

  constructor(private dialog: MatDialog) {
    const todoCollection = collection(this.firestore, 'todo');
    const inProgressCollection = collection(this.firestore, 'inProgress');
    const doneCollection = collection(this.firestore, 'done');
    const options = { idField: 'id' };
    this.todo$ = collectionData(todoCollection, options) as Observable<Task[]>;
    this.inProgress$ = collectionData(inProgressCollection, options) as Observable<Task[]>;
    this.done$ = collectionData(doneCollection, options) as Observable<Task[]>;
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
          deleteDoc(doc(this.firestore, collection, task.id as string));
        } else {
          const todoDocRef = doc(this.firestore, collection, task.id as string);
          updateDoc(todoDocRef, <any>task);
        }
      });
  };

  drop = (event: CdkDragDrop<Task[]>) => {
    if (event.previousContainer === event.container) {
      return;
    }

    const item = event.previousContainer.data[event.previousIndex];
    runTransaction(this.firestore, async () => {
      deleteDoc(doc(this.firestore, event.previousContainer.id, item.id as string));
      addDoc(collection(this.firestore, event.container.id), item);
    });

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
