import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VisualizerComponent } from './visualizer/visualizer.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VisualizerComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
