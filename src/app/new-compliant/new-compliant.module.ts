import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewCompliantRoutingModule } from './new-compliant-routing.module';
import { ComplainFormComponent } from '../components/complain-form/complain-form.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, NewCompliantRoutingModule, ComplainFormComponent],
})
export class NewCompliantModule {}
