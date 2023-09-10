import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { TaskComponent } from './task.component';
import { Task } from './task';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let task: Task;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [TaskComponent]
    });
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    task = {
      id: '1',
      title: 'Sample Task',
      description: 'This is a sample task description.',
    };
    component.task = task;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display task title and description', () => {
    const cardElement: HTMLElement = fixture.nativeElement.querySelector('.item');
    expect(cardElement.textContent).toContain('Sample Task');
    expect(cardElement.textContent).toContain('This is a sample task description.');
  });

  it('should emit edit event when card is clicked', () => {
    const editEmitterSpy = spyOn(component.edit, 'emit');
    const cardElement: HTMLElement = fixture.nativeElement.querySelector('.item');
    cardElement.click();

    expect(editEmitterSpy).toHaveBeenCalledWith(task);
  });
});
