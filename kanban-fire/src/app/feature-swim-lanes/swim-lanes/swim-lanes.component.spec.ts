import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimLanesComponent } from './swim-lanes.component';
import { MatDialogModule } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('SwimLanesComponent', () => {
  let component: SwimLanesComponent;
  let fixture: ComponentFixture<SwimLanesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwimLanesComponent],
      imports: [
        DragDropModule,
        MatDialogModule,
        MatIconModule,
        MatProgressSpinnerModule,        
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),        
      ]
    });
    fixture = TestBed.createComponent(SwimLanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
