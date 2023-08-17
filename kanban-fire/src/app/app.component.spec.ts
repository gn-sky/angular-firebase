import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { FeatureSwimLanesModule } from './feature-swim-lanes/feature-swim-lanes.module';


describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      AppComponent,
    ],
    imports: [
      FeatureSwimLanesModule,
      ToolbarModule
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
