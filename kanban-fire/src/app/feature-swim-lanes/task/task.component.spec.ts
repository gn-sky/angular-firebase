import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { TaskComponent } from './task.component';
import { Task } from './task';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskComponent],
      imports: [MatCardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display task title and description', () => {
    const task: Task = {
      id: '1',
      title: 'Sample Task',
      description: 'This is a sample task description.',
    };

    component.task = task;
    fixture.detectChanges();

    const cardElement: HTMLElement = fixture.nativeElement.querySelector('.item');
    expect(cardElement.textContent).toContain('Sample Task');
    expect(cardElement.textContent).toContain('This is a sample task description.');
  });
});
