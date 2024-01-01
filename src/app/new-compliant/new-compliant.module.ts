import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewCompliantRoutingModule } from './new-compliant-routing.module';
import { NewCompliantComponent } from './new-compliant.component';


@NgModule({
  declarations: [
    NewCompliantComponent
  ],
  imports: [
    CommonModule,
    NewCompliantRoutingModule
  ]
})
export class NewCompliantModule { }
