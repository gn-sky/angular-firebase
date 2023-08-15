import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDialogComponent } from './task-dialog.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

describe('TaskDialogComponent', () => {
  let component: TaskDialogComponent;
  let fixture: ComponentFixture<TaskDialogComponent>;
  const mockData = {
    task: { title: 'Mock Task', description: 'This is a mock task.' },
    enableDelete: true
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskDialogComponent],
      imports: [
        BrowserAnimationsModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        FormsModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: mockData },
        { provide: MatDialogRef, useValue: {} },
      ]
    });
    fixture = TestBed.createComponent(TaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
