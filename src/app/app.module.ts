import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StructuralComponent } from './structural-dir/structural.component';
import { AttributeComponent } from './attribute-dir/attribute.component';
import { ComponentDirComponent } from './component-dir/component-dir.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AttributeComponent,
    StructuralComponent,
    ComponentDirComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
