import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { FeatureSwimLanesModule } from './feature-swim-lanes/feature-swim-lanes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FeatureSwimLanesModule,
    ToolbarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
