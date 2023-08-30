import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDialogComponent, TaskDialogData } from './task-dialog.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TaskDialogComponent', () => {
  let component: TaskDialogComponent;
  let fixture: ComponentFixture<TaskDialogComponent>;
  const dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);
  const mockTaskDialogData: TaskDialogData = {
    task: { title: 'Test Title', description: 'Test Description' },
    enableDelete: false
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskDialogComponent],
      imports: [
        BrowserAnimationsModule,
        MatDialogModule,
        MatInputModule,
        FormsModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: mockTaskDialogData },
        { provide: MatDialogRef, useValue: dialogRefSpy },
      ]
    });
    fixture = TestBed.createComponent(TaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should cancel and restore original task values', () => {
    component.data.task.title = 'Modified Title';
    component.data.task.description = 'Modified Description';

    component.cancel();

    expect(dialogRefSpy.close).toHaveBeenCalled();
    expect(component.data.task.title).toBe('Test Title');
    expect(component.data.task.description).toBe('Test Description');
  });
});
