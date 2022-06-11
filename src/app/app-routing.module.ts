import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { AttributeComponent } from './attribute-dir/attribute.component';
import { StructuralComponent } from './structural-dir/structural.component';
import { ComponentDirComponent } from './component-dir/component-dir.component';

const routes: Routes = [
  {path:'attribute',component:AttributeComponent},
  {path:'structural',component:StructuralComponent},
  {path:'component',component:ComponentDirComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
