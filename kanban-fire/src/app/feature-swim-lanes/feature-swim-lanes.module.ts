import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataAccessSwimLanesModule } from '../data-access-swim-lanes/data-access-swim-lanes.module';
import { SwimLanesComponent } from './swim-lanes/swim-lanes.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskComponent } from './task/task.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    SwimLanesComponent,
    TaskComponent,
    TaskDialogComponent
  ],
  imports: [
    CommonModule,
    DataAccessSwimLanesModule,
    DragDropModule,
    FormsModule,    
    MatButtonModule,
    MatCardModule,
    MatDialogModule,      
    MatIconModule,
    MatInputModule,    
    MatProgressSpinnerModule,
  ],
  exports: [
    SwimLanesComponent
  ]
})
export class FeatureSwimLanesModule { }
