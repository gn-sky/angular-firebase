import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwimLanesComponent } from './swim-lanes/swim-lanes.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
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
    DragDropModule,
    FormsModule,    
    MatButtonModule,
    MatCardModule,
    MatDialogModule,      
    MatIconModule,
    MatInputModule,    
    MatProgressSpinnerModule,    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),    
  ],
  exports: [
    SwimLanesComponent
  ]
})
export class FeatureSwimLanesModule { }
