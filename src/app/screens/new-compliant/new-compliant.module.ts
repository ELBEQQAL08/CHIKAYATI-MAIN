import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewCompliantRoutingModule } from './new-compliant-routing.module';
import { ComplainFormComponent } from '../../components/forms/complain-form/complain-form.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, NewCompliantRoutingModule, ComplainFormComponent],
})
export class NewCompliantModule {}
