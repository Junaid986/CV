import { MaterialService } from './services';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CanvasComponent } from './canvas/canvas.component';
import { MaterialModule } from '@angular/material';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    CanvasComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    MaterialModule.forRoot(),
    AlertModule.forRoot()
  ],
  exports: [
    MaterialModule
  ],
  providers: [MaterialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
